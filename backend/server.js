const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const appointmentRoutes = require("./routes/appointmentRoutes");
// 1. Auth / User Routes ko import karein (agar aapke routes folder me file ka naam alag hai to wo naam likhein)
const authRoutes = require("./routes/authRoutes"); 

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "MediCare API is running" });
});

app.use("/api/appointments", appointmentRoutes);
// 2. Auth routes ko mount karein
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    family: 4,
    serverSelectionTimeoutMS: 5000
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((error) => {
    console.log("Database error:", error);
  });