const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

/* ROUTES */
const agentRoutes = require("./routes/agentRoutes");
const customerRoutes = require("./routes/customerRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ROUTES USE */
app.use("/api/agents", agentRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
    res.send("HOME API is running...");
});

/* MONGODB CONNECTION */
mongoose.connect("mongodb://127.0.0.1:27017/home_db")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("MongoDB Error:", err);
    });

/* SERVER */
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
