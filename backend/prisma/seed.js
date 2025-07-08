const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    await prisma.product.createMany({
        data: [{
                name: "T-Shirt",
                description: "Soft cotton t-shirt",
                price: 19.99,
                imageUrl: "https://example.com/tshirt.jpg"
            },
            {
                name: "Sneakers",
                description: "Comfortable running shoes",
                price: 59.99,
                imageUrl: "https://example.com/sneakers.jpg"
            }
        ]
    });

    console.log("Seed data created!");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });