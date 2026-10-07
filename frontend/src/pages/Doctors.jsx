import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const navigate = useNavigate();

  const doctorsList = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      speciality: "General Physician",
      experience: "8+ Years Exp.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      speciality: "Cardiologist",
      experience: "12+ Years Exp.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      speciality: "Dermatologist",
      experience: "6+ Years Exp.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', minHeight: '75vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#0284c7', fontSize: '32px', marginBottom: '8px' }}>Find a Doctor</h2>
        <p style={{ color: '#64748b' }}>Book an appointment with top specialists</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px'
      }}>
        {doctorsList.map((doc) => (
          <div key={doc.id} style={{
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            backgroundColor: '#ffffff',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <img
                src={doc.image}
                alt={doc.name}
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <span style={{
                  backgroundColor: '#e0f2fe',
                  color: '#0369a1',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {doc.speciality}
                </span>
                <h3 style={{ color: '#0f172a', margin: '12px 0 4px 0', fontSize: '20px' }}>{doc.name}</h3>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '0' }}>{doc.experience}</p>
              </div>
            </div>

            <div style={{ padding: '0 20px 20px 20px' }}>
              <button
                onClick={() => navigate('/book/' + doc.id)}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;