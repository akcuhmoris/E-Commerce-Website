require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.json({ message: 'API is running 🚀' });
});

// TODO: Add auth routes, product routes, etc.

const PORT = process.env.PORT || 5000;

console.log("Using port:", PORT);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));