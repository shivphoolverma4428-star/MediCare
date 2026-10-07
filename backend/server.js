const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "MediCare API is running"
  });
});

app.use("/api/appointments", appointmentRoutes);

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