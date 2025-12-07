import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '4rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1rem' }}>Let's Work Together</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
                    Interested in optimizing your cloud infrastructure or securing your deployment pipeline? Reach out!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="https://www.linkedin.com/in/sofonias-mengistu-b5394179/" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/Sofoniasm" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                        <Github size={24} />
                    </a>
                    <a href="mailto:sofoniasmengistu@gmail.com" style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                        <Mail size={24} />
                    </a>
                    <a href="https://wa.me/251912215057" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}>
                        <MessageCircle size={24} />
                    </a>
                </div>

                <div style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '0.5rem' }}>📞 +251 912 215 057</p>
                    <p style={{ marginBottom: '0.5rem' }}>📞 +251 946 699 350</p>
                    <p>✉️ sofoniasmengistu@gmail.com</p>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Sofonias Mengistu. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
