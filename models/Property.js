const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    images: [String],
    agentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agent"
    }
});

module.exports = mongoose.model("Property", propertySchema);
