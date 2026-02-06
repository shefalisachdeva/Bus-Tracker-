const express = require("express");
const Route = require("../models/Route");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ✅ Admin: add new route
router.post("/", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }

    const route = new Route(req.body);
    await route.save();

    res.json({ message: "Route added successfully" });
  } catch (err) {
    console.error("ADD ROUTE ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get all routes (students can view)
router.get("/", async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (err) {
    console.error("GET ROUTES ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
