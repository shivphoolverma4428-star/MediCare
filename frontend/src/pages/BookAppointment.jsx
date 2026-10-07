import React from "react";
import { useParams } from "react-router-dom";

function BookAppointment() {
  const { doctorId } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Book Appointment</h1>

      <p>Doctor ID: {doctorId}</p>

      <form>
        <input
          type="text"
          placeholder="Patient Name"
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <br /><br />

        <input
          type="date"
          required
        />

        <br /><br />

        <input
          type="time"
          required
        />

        <br /><br />

        <button type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;