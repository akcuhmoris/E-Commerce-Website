const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    // 1) Seed some products
    await prisma.product.createMany({
        data: [
            { name: 'Hat', price: 14.99, description: 'A stylish hat' },
            { name: 'Jacket', price: 99.99, description: 'Warm winter jacket' },
            { name: 'Sneakers', price: 59.99, description: 'Comfortable running shoes' }
        ],
        skipDuplicates: true
    });

    // 2) Seed an admin user
    const hashed = await bcrypt.hash('admin123', 10);
    await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            password: hashed,
            name: 'Admin User',
            role: 'ADMIN'
        }
    });

    console.log('🌱  Seed data created!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });