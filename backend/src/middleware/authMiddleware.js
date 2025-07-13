const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

exports.protect = (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // userId, email, role
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
exports.adminOnly = (req, res, next) => {
    if (req.user.role !== "ADMIN") {
        return res.status(403).json({ message: "Forbidden: Admins only" });
    }
    next();
};