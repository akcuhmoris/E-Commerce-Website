const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { protect, adminOnly } = require("../middleware/authMiddleware");

router.post("/create", protect, adminOnly, async (req, res) => {
  // admin-only logic
});



// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

module.exports = router;