import React from 'react';

const Clients = () => {
  const clients = [
    "Al Harrasi Rope Factory",
    "Oman Air الطيران العُماني",
    "Tamimah Telecom",
    "Mafran Meat",
    "Gloria Jean's",
    "Al Qurum Perfumes",
    "S/M سلطنة الرخام",
    "وزارة الأوقاف والشؤون الدينية",
    "سيبة برجر",
    "AMEC Almusharfi Engineering",
    "Atiin ✦",
    "IBS",
    "Oudh Al Kabeer العود الكبير",
    "Yalla"
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <h4 className="section-subtitle">Our Clients</h4>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
        </div>
        
        <div className="marquee-container">
          <div className="marquee-content">
            {clients.map((client, index) => (
              <span key={index} className="client-logo">{client}</span>
            ))}
            {/* Duplicate for infinite loop */}
            {clients.map((client, index) => (
              <span key={`dup-${index}`} className="client-logo">{client}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
