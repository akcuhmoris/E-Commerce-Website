const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { protect, adminOnly } = require("../middleware/authMiddleware");
router.post("/", protect, adminOnly, productController.createProduct);


router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);

module.exports = router;