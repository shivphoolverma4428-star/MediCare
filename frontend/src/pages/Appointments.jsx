import React, { useState } from 'react';

const Appointments = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    doctorName: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Booked Successfully for ${formData.patientName}!`);
  };

  return (
    <div style={{ 
      padding: '40px 20px', 
      minHeight: '80vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#f8fafc' 
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '36px 32px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
        width: '100%',
        maxWidth: '500px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 style={{ color: '#0284c7', fontSize: '28px', marginBottom: '6px', fontWeight: '700' }}>
            Book Appointment
          </h2>
          <p style={{ color: '#64748b', fontSize: '14px' }}>
            Fill in the details below to schedule your visit
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              placeholder="Enter full name"
              value={formData.patientName}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
              Select Doctor
            </label>
            <select
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">-- Choose Doctor --</option>
              <option value="Dr. Rahul Sharma">Dr. Rahul Sharma (General Physician)</option>
              <option value="Dr. Priya Patel">Dr. Priya Patel (Cardiologist)</option>
              <option value="Dr. Amit Verma">Dr. Amit Verma (Dermatologist)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{
              marginTop: '10px',
              padding: '12px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  fontSize: '14px',
  color: '#0f172a',
  outline: 'none',
  boxSizing: 'border-box'
};

export default Appointments;