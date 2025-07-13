const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const Joi = require("joi");
const { registerSchema, loginSchema } = require('../validators/authValidator');



const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
exports.register = async(req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { email, password, name } = req.body;
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        name: Joi.string().min(2).required()
    });

    try {
        // Check if user exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });

        return res.status(201).json({ message: "User created", user: { id: user.id, email: user.email } });
    } catch (error) {
        console.error("Register error:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Login an existing user
exports.login = async(req, res) => {
    const { email, password } = req.body;
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }


    try {
        // Find user
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT
        const token = jwt.sign({ userId: user.id, email: user.email, role: user.role },
            JWT_SECRET, { expiresIn: "7d" }
        );

        return res.json({ token });
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ message: "Server error" });
    }
};