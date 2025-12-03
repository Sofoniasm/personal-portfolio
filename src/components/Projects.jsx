import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and deployed a highly available Kubernetes platform across AWS, Azure, and GCP with centralized monitoring and automated scaling.",
      technologies: ["Kubernetes", "Terraform", "AWS", "Azure", "GCP", "Prometheus"]
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built end-to-end CI/CD pipelines using GitLab CI and ArgoCD, reducing deployment time by 70% and improving reliability.",
      technologies: ["GitLab CI", "ArgoCD", "Docker", "Kubernetes", "Helm"]
    },
    {
      title: "Infrastructure as Code Framework",
      description: "Created a reusable IaC framework using Terraform and Ansible for provisioning cloud infrastructure with compliance guardrails.",
      technologies: ["Terraform", "Ansible", "Python", "AWS", "Azure"]
    },
    {
      title: "Observability & Monitoring Stack",
      description: "Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack for distributed microservices architecture.",
      technologies: ["Prometheus", "Grafana", "ELK", "Kubernetes", "Go"]
    },
    {
      title: "Security & Compliance Automation",
      description: "Developed automated security scanning and compliance checking pipeline integrated with CI/CD workflows.",
      technologies: ["Trivy", "Falco", "OPA", "Vault", "Jenkins"]
    },
    {
      title: "Service Mesh Implementation",
      description: "Deployed and configured Istio service mesh for microservices communication, security, and traffic management.",
      technologies: ["Istio", "Kubernetes", "Envoy", "Prometheus", "Grafana"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
