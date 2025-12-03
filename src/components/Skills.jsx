import React from 'react';

const skills = {
    "Certifications": ["Kubestronaut (KCSA, KCNA, CKA, CKAD, CKS)", "All 12 Azure Certifications", "AWS Solution Architect", "Cisco (CCNA, CCNP, CCNA Security, CCNP Security)"],
    "Cloud Platforms": ["AWS", "Google Cloud Platform", "Microsoft Azure", "Infomaniak", "Akamai", "OpenStack"],
    "Networking": ["Cisco Routing & Switching", "Network Security", "VPN", "Firewalls", "Load Balancing", "All Networking Tasks (except physical cabling)"],
    "Data & ML": ["Data Engineering", "Machine Learning", "MLOps", "Big Data", "Model Deployment"],
    "DevOps & Tools": ["Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "GitLab CI"],
    "Security": ["IAM", "Network Security", "Compliance", "SonarQube"],
    "Languages": ["Python", "Go", "Bash", "JavaScript"]
};

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2 style={{ marginBottom: '3rem' }}>Technical <span className="text-gradient">Skills</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>{category}</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {items.map(skill => (
                                    <li key={skill} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-secondary)', borderRadius: '50%' }} />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
