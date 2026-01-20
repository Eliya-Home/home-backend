const express = require("express");
const bcrypt = require("bcryptjs");
const Customer = require("../models/Customer");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const customer = new Customer({
        name, email,
        password: hashed
    });

    await customer.save();
    res.json({ message: "Customer registered" });
});

module.exports = router;
