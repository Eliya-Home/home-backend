const Agent = require("../models/Agent");
const bcrypt = require("bcryptjs");

/* REGISTER AGENT */
exports.registerAgent = async (req, res) => {
  try {
    const { fullName, phone, nida, tin, password } = req.body;

    if (!fullName || !phone || !nida || !tin || !password) {
      return res.status(400).json({
        message: "Tafadhali jaza taarifa zote",
      });
    }

    const existingAgent = await Agent.findOne({
      $or: [{ phone }, { nida }, { tin }],
    });

    if (existingAgent) {
      return res.status(400).json({
        message: "Dalali tayari amesajiliwa",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const agent = await Agent.create({
      fullName,
      phone,
      nida,
      tin,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Usajili umefanikiwa, subiri verification",
      agent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
