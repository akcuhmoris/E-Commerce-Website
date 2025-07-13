const { PrismaClient } = require("@prisma/client");
const { createProductSchema } = require("../validators/productValidator");
const prisma = new PrismaClient();

// Get all products
exports.getProducts = async(req, res, next) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (err) {
        next(err);
    }
};

// Get a single product by ID
exports.getProduct = async(req, res, next) => {
    try {
        const id = parseInt(req.params.id, 10);
        const product = await prisma.product.findUnique({ where: { id } });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (err) {
        next(err);
    }
};

// Create a new product (admin only)
exports.createProduct = async(req, res, next) => {
    // Validate input
    const { error } = createProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const { name, description, price, imageUrl } = req.body;
        const product = await prisma.product.create({
            data: { name, description, price, imageUrl }
        });
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
};