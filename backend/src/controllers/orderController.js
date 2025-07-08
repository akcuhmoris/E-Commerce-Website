const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createOrder = async(req, res) => {
    const { items } = req.body;
    const userId = req.user.userId;

    // Calculate total
    let total = 0;
    items.forEach(i => {
        total += i.price * i.quantity;
    });

    // Create order
    const order = await prisma.order.create({
        data: {
            userId,
            total,
            items: {
                create: items.map(i => ({
                    productId: i.productId,
                    quantity: i.quantity,
                    price: i.price
                }))
            }
        },
        include: { items: true }
    });

    res.status(201).json(order);
};

exports.getOrders = async(req, res) => {
    const userId = req.user.userId;
    const orders = await prisma.order.findMany({
        where: { userId },
        include: { items: true }
    });
    res.json(orders);
};