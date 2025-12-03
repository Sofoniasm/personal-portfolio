import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"]
    },
    {
      title: "Container & Orchestration",
      skills: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Rancher"]
    },
    {
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "Terraform", "Ansible"]
    },
    {
      title: "Monitoring & Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Bash", "Go", "JavaScript", "YAML"]
    },
    {
      title: "Security & Compliance",
      skills: ["Vault", "Trivy", "Falco", "OPA", "Cert-Manager"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
