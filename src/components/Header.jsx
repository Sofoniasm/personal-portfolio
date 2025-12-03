import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import '../index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.9)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Sofonias<span className="text-gradient">DevSecOps</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ fontWeight: '500' }}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} style={{ color: 'white' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-secondary)',
            padding: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={toggleMenu} style={{ fontSize: '1.2rem' }}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
