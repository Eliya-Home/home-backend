const express = require("express");
const multer = require("multer");
const Property = require("../models/Property");
const Agent = require("../models/Agent");

const router = express.Router();

/* IMAGE STORAGE */
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({
    storage,
    limits: { files: 5 }
});

/* ADD PROPERTY (VERIFIED AGENT ONLY) */
router.post("/add", upload.array("images", 5), async (req, res) => {
    try {
        const { title, description, price, agentId } = req.body;

        const agent = await Agent.findById(agentId);
        if (!agent || !agent.verified) {
            return res.status(403).json({ message: "Dalali hajaverified" });
        }

        const images = req.files.map(f => f.filename);

        const property = new Property({
            title,
            description,
            price,
            images,
            agentId
        });

        await property.save();
        res.json({ message: "Property imeongezwa" });

    } catch (err) {
        res.status(500).json({ message: "Imeshindikana" });
    }
});

/* 🔍 SEARCH & FILTER PROPERTIES */
router.get("/", async (req, res) => {
    const { q, min, max } = req.query;

    let filter = {};

    if (q) {
        filter.$or = [
            { title: { $regex: q, $options: "i" } },
            { description: { $regex: q, $options: "i" } }
        ];
    }

    if (min || max) {
        filter.price = {};
        if (min) filter.price.$gte = Number(min);
        if (max) filter.price.$lte = Number(max);
    }

    const properties = await Property.find(filter).populate("agentId", "name phone");
    res.json(properties);
});

module.exports = router;
