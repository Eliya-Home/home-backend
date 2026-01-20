const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Agent = require("../models/Agent");
const Customer = require("../models/Customer");

const router = express.Router();
const SECRET = "HOME_SECRET_KEY";

/* =====================
   AGENT LOGIN
===================== */
router.post("/agent/login", async (req, res) => {
    const { nida, password } = req.body;

    const agent = await Agent.findOne({ nida });
    if (!agent) {
        return res.status(404).json({ message: "Dalali hajapatikana" });
    }

    if (agent.password !== password) {
        return res.status(401).json({ message: "Password sio sahihi" });
    }

    const token = jwt.sign(
        { id: agent._id, role: "agent" },
        SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        message: "Login successful",
        token,
        role: "agent",
        agent
    });
});

/* =====================
   CUSTOMER LOGIN
===================== */
router.post("/customer/login", async (req, res) => {
    const { phone, password } = req.body;

    const customer = await Customer.findOne({ phone });
    if (!customer) {
        return res.status(404).json({ message: "Mteja hajapatikana" });
    }

    if (customer.password !== password) {
        return res.status(401).json({ message: "Password sio sahihi" });
    }

    const token = jwt.sign(
        { id: customer._id, role: "customer" },
        SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        message: "Login successful",
        token,
        role: "customer",
        customer
    });
});

/* =====================
   ADMIN LOGIN (STATIC)
===================== */
router.post("/admin/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "admin123") {
        const token = jwt.sign(
            { role: "admin" },
            SECRET,
            { expiresIn: "1d" }
        );

        return res.json({
            message: "Admin login successful",
            token,
            role: "admin"
        });
    }

    res.status(401).json({ message: "Admin credentials sio sahihi" });
});

module.exports = router;
