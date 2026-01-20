const express = require("express");
const bcrypt = require("bcryptjs");
const Agent = require("../models/Agent");

const router = express.Router();

/* REGISTER AGENT */
router.post("/register", async (req, res) => {
    try {
        const { name, nida, tin, password } = req.body;

        const hashed = await bcrypt.hash(password, 10);

        const agent = new Agent({
            name,
            nida,
            tin,
            password: hashed,
            verified: false
        });

        await agent.save();
        res.json({ message: "Dalali amesajiliwa, anasubiri verification" });

    } catch (err) {
        res.status(500).json({ message: "Agent registration failed" });
    }
});

/* GET ALL AGENTS (ADMIN) */
router.get("/", async (req, res) => {
    const agents = await Agent.find();
    res.json(agents);
});

/* GET PENDING AGENTS */
router.get("/pending", async (req, res) => {
    const agents = await Agent.find({ verified: false });
    res.json(agents);
});

/* VERIFY AGENT */
router.put("/verify/:id", async (req, res) => {
    await Agent.findByIdAndUpdate(req.params.id, { verified: true });
    res.json({ message: "Dalali ameverified kikamilifu" });
});

module.exports = router;
