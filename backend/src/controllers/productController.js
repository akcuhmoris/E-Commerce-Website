const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getProducts = async(req, res) => {
    const products = await prisma.product.findMany();
    res.json(products);
};
const { createProductSchema } = require('../validators/productValidator');

const { error } = createProductSchema.validate(req.body);
if (error) {
    return res.status(400).json({ message: error.details[0].message });
}


exports.getProduct = async(req, res) => {
    const id = parseInt(req.params.id);
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
};