import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} Cloud DevOps Portfolio. Built with React & Vite.
        </p>
        <p className="footer-kubestronaut">
          Proud Kubestronaut ☸️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
