import React from 'react';

const Partners = () => {
  const partners = [
    "Microsoft Azure", "Google Cloud", "Amazon Web Services", "Oracle", "HUAWEI eKit",
    "SAP", "Microsoft Dynamics 365", "ERPNext", "Odoo", ".NET Core", "Python",
    "MongoDB", "ClickUp", "Zoho", "OpenAI", "Gemini", "Claude", "Copilot", "Deepseek",
    "Power BI", "Tableau", "Google Ads", "Meta Business Suite", "WhatsApp Business API",
    "Microsoft Teams", "Salesforce", "HubSpot", "Mailchimp", "GoDaddy", "WordPress",
    "Shopify", "Outlook", "Vercel", "Figma", "Adobe Creative Cloud"
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="text-center">
          <h4 className="section-subtitle">Technology Stack</h4>
          <h2 className="section-title">Service & Technology Partners</h2>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <span key={index} className="partner-tag">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
