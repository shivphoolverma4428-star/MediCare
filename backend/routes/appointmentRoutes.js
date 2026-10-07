const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");

// Create appointment
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);

    const savedAppointment = await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: savedAppointment
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to book appointment",
      error: error.message
    });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("doctor");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get appointments",
      error: error.message
    });
  }
});

module.exports = router;