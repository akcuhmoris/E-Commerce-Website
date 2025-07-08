const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getProducts = async(req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
};

exports.getProduct = async(req, res) => {
    const id = parseInt(req.params.id);
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
};