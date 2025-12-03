import React from 'react';
import { Briefcase, GraduationCap, Server, Network } from 'lucide-react';

const About = () => {
    const timeline = [
        {
            year: "2018 - Present",
            role: "DevOps Engineer & Kubestronaut",
            description: "Specializing in Kubernetes, Cloud Native technologies, and DevSecOps. Achieved 'Kubestronaut' status (KCSA, KCNA, CKA, CKAD, CKS) and holding All 12 Azure Certifications.",
            icon: <Server size={20} />
        },
        {
            year: "2010 - 2018",
            role: "Network & System Admin at ECX",
            description: "Managed on-premise infrastructure at the Ethiopia Commodity Exchange (ECX). Responsible for network security and system administration. Certifications: Cisco (CCNA, CCNP, CCNA Security, CCNP Security).",
            icon: <Network size={20} />
        },
        {
            year: "2010",
            role: "BSc in Computer Science",
            description: "Graduated from HiLCoE School of Computer Science and Technology.",
            icon: <GraduationCap size={20} />
        }
    ];

    return (
        <section id="about-details" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ marginBottom: '3rem' }}>About <span className="text-gradient">Me</span></h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Bio Section */}
                    <div style={{
                        display: 'flex',
                        gap: '3rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/profile.jpg"
                            alt="Sofonias Mengistu"
                            style={{
                                width: '250px',
                                height: '250px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid var(--accent-primary)',
                                boxShadow: '0 0 20px rgba(100, 108, 255, 0.3)'
                            }}
                        />
                        <div style={{ maxWidth: '600px' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Sofonias Mengistu</h3>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1.5rem' }}>
                                DevSecOps | Cloud | Data | ML & MLOps | Network Engineer | Trainer
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                With over 16+ years of IT experience, my career began in IT support and progressed through roles as a Network Engineer and Network Specialist. I have worked as a Field Engineer for over 35 technology companies, successfully delivering a wide range of networking and infrastructure projects.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                In the last 6 years, I transitioned into DevOps and cloud technologies, excelling in designing, deploying, and automating robust infrastructure solutions across AWS, Azure, GCP, and on-premises Kubernetes environments.
                            </p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                A proud Kubestronaut and active member of the open-source community, I am always exploring innovative solutions to complex challenges. Currently serving as a DevOps Engineer at Gebeya.INC, spearheading Kubernetes engineering for Safaricom projects.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div style={{ width: '100%', maxWidth: '800px' }}>
                        <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>My Journey</h3>
                        {timeline.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                gap: '2rem',
                                marginBottom: '3rem',
                                position: 'relative'
                            }}>
                                {/* Timeline Line */}
                                {index !== timeline.length - 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        left: '24px',
                                        top: '50px',
                                        bottom: '-50px',
                                        width: '2px',
                                        backgroundColor: 'rgba(255,255,255,0.1)'
                                    }} />
                                )}

                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(100, 108, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-primary)',
                                    flexShrink: 0,
                                    zIndex: 1
                                }}>
                                    {item.icon}
                                </div>

                                <div>
                                    <span style={{
                                        color: 'var(--accent-secondary)',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        display: 'block',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {item.year}
                                    </span>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.role}</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
