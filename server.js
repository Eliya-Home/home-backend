const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const agentRoutes = require("./routes/agentRoutes");
const customerRoutes = require("./routes/customerRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ROUTES */
app.use("/api/agents", agentRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/admin", adminRoutes);

/* DEFAULT ROUTE */
app.get("/", (req, res) => {
    res.send("HOME Backend is running");
});

/* DATABASE CONNECTION */
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });
