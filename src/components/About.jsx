import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate Cloud DevOps Engineer and proud <strong>Kubestronaut</strong>, 
              specializing in building scalable, reliable, and automated infrastructure solutions. 
              With extensive experience in cloud platforms, container orchestration, and CI/CD pipelines, 
              I help organizations transform their infrastructure into modern, cloud-native environments.
            </p>
            <p className="about-description">
              As a Kubestronaut, I've demonstrated deep expertise across the entire Kubernetes ecosystem 
              by earning multiple Kubernetes certifications. I'm committed to implementing best practices 
              in cloud architecture, security, and DevOps methodologies to deliver high-quality solutions 
              that drive business value.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
