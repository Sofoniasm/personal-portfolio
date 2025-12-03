import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just connecting with fellow DevOps and Cloud enthusiasts. 
            Feel free to reach out through any of the channels below!
          </p>
          <div className="contact-links">
            <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">🐙</span>
              <span className="contact-label">GitHub</span>
            </a>
            <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">💼</span>
              <span className="contact-label">LinkedIn</span>
            </a>
            <a href="mailto:contact@example.com" className="contact-link">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
            </a>
            <a href="https://twitter.com" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">🐦</span>
              <span className="contact-label">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
