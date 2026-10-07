import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', minHeight: '75vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#0284c7', fontSize: '32px', marginBottom: '8px', fontWeight: '700' }}>
          Contact Us
        </h2>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          Have questions? We'd love to hear from you. Send us a message!
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {/* Left Side: Contact Information */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={infoCardStyle}>
            <div style={{ fontSize: '28px', marginRight: '16px' }}>📍</div>
            <div>
              <h4 style={infoTitleStyle}>Our Hospital Address</h4>
              <p style={infoTextStyle}>123 Health Ave, Medical District, City, India</p>
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={{ fontSize: '28px', marginRight: '16px' }}>📞</div>
            <div>
              <h4 style={infoTitleStyle}>Phone / Emergency</h4>
              <p style={infoTextStyle}>+91 98765 43210 / +91 11 2345 6789</p>
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={{ fontSize: '28px', marginRight: '16px' }}>📧</div>
            <div>
              <h4 style={infoTitleStyle}>Email Us</h4>
              <p style={infoTextStyle}>support@medicare.com</p>
            </div>
          </div>

          <div style={infoCardStyle}>
            <div style={{ fontSize: '28px', marginRight: '16px' }}>⏰</div>
            <div>
              <h4 style={infoTitleStyle}>Working Hours</h4>
              <p style={infoTextStyle}>Mon - Sat: 8:00 AM - 8:00 PM (24/7 Emergency)</p>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '28px',
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ color: '#0f172a', marginBottom: '20px', fontSize: '20px' }}>Send a Message</h3>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email Address</label>
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
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                style={{ ...inputStyle, resize: 'vertical' }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                padding: '12px',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const infoCardStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: '18px 20px',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
};

const infoTitleStyle = {
  margin: '0 0 4px 0',
  color: '#0f172a',
  fontSize: '16px'
};

const infoTextStyle = {
  margin: '0',
  color: '#64748b',
  fontSize: '14px'
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: '600',
  color: '#334155',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: '8px',
  border: '1px solid #cbd5e1',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box'
};

export default Contact