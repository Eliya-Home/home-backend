const express = require("express");
const Agent = require("../models/Agent");

const router = express.Router();

/* GET ALL AGENTS */
router.get("/agents", async (req, res) => {
    try {
        const agents = await Agent.find();
        res.json(agents);
    } catch (err) {
        res.status(500).json({ message: "Error kupata agents" });
    }
});

/* VERIFY AGENT */
router.put("/verify/:id", async (req, res) => {
    try {
        await Agent.findByIdAndUpdate(req.params.id, { verified: true });
        res.json({ message: "Agent ameverified" });
    } catch (err) {
        res.status(500).json({ message: "Verification imeshindikana" });
    }
});

module.exports = router;
