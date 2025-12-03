import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Cloud DevOps Engineer
            <br />
            <span className="highlight">& Kubestronaut</span>
          </h1>
          <p className="hero-subtitle">
            Transforming infrastructure through automation, orchestration, and cloud-native technologies
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="kubernetes-icon">☸️</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
