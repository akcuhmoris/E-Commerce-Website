require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");



const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Health check route
app.get('/', (req, res) => {
    res.json({ message: 'API is running 🚀' });
});

// TODO: Add auth routes, product routes, etc.
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payments", paymentRoutes);




const PORT = process.env.PORT || 5000;

console.log("Using port:", PORT);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));