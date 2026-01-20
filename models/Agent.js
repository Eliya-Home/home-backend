const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    name: String,
    nida: String,
    tin: String,
    password: String,
    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Agent", agentSchema);
