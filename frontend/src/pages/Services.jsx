import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const servicesList = [
    {
      id: 1,
      title: "Doctor Consultation",
      description: "Consult with highly qualified and experienced doctors for your health concerns.",
      icon: "👨‍⚕️"
    },
    {
      id: 2,
      title: "Online Appointment",
      description: "Book your appointment online easily without waiting in long queues.",
      icon: "📅"
    },
    {
      id: 3,
      title: "Emergency Care",
      description: "Get immediate health care support and emergency medical assistance when needed.",
      icon: "🚨"
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: '70vh' }}>
      <h2 style={{ textAlign: 'center', color: '#0284c7', marginBottom: '30px', fontSize: '28px' }}>
        Our Services
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {servicesList.map((service) => (
          <div key={service.id} style={{
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{service.icon}</div>
              <h3 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '20px' }}>{service.title}</h3>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>{service.description}</p>
            </div>
            
            {/* Book Now Button */}
            <button 
              onClick={() => navigate('/doctors')} 
              style={{
                marginTop: '20px',
                padding: '10px 18px',
                backgroundColor: '#0284c7',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;