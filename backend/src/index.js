require('dotenv-safe').config();
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
const errorHandler = require("./middleware/errorHandler");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");


const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(helmet());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100, // per IP
});
app.use(limiter);


// Health check route
app.get('/', (req, res) => {
    res.json({ message: 'API is running 🚀' });
});

//TODO: Add auth routes, product routes, etc.
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

const paymentRoutes = require("./routes/paymentRoutes");
app.use("/api/payments", paymentRoutes);
app.use(errorHandler);




const PORT = process.env.PORT || 4000;

const logger = require("./logger");

app.listen(PORT, '0.0.0.0', () => logger.info(`Server running on port ${PORT}`));