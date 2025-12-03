import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      name: "Kubestronaut",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      icon: "☸️",
      description: "Elite Kubernetes certification holder - all 5 K8s certifications"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      icon: "🎓",
      description: "Kubernetes cluster administration and troubleshooting"
    },
    {
      name: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "CNCF",
      icon: "🎓",
      description: "Design, build, configure, and expose cloud-native applications"
    },
    {
      name: "Certified Kubernetes Security Specialist (CKS)",
      issuer: "CNCF",
      icon: "🛡️",
      description: "Kubernetes security best practices and implementation"
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      icon: "☁️",
      description: "Designing distributed systems on AWS"
    },
    {
      name: "Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      icon: "☁️",
      description: "DevOps practices and Azure services"
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      icon: "☁️",
      description: "Design and manage cloud architecture on GCP"
    },
    {
      name: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      icon: "🔧",
      description: "Infrastructure as Code using Terraform"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
