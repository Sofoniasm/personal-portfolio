import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "AWS Migration Strategy",
        description: "Led the migration of a monolithic application to a microservices architecture on AWS using EKS and Lambda.",
        tags: ["AWS", "Kubernetes", "Terraform"],
        link: "#"
    },
    {
        title: "DevSecOps Pipeline",
        description: "Implemented a comprehensive CI/CD pipeline with automated security scanning using Jenkins and SonarQube.",
        tags: ["Jenkins", "Docker", "Security"],
        link: "#"
    },
    {
        title: "Multi-Cloud Monitoring",
        description: "Built a centralized monitoring dashboard for hybrid cloud infrastructure using Prometheus and Grafana.",
        tags: ["GCP", "Azure", "Grafana"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ marginBottom: '3rem' }}>Featured <span className="text-gradient">Projects</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--bg-primary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 0.8rem',
                                        backgroundColor: 'rgba(100, 108, 255, 0.1)',
                                        color: 'var(--accent-primary)',
                                        borderRadius: '15px'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                                View Details <ExternalLink size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
