import React from 'react';
import { ArrowRight, Cloud, Terminal, Shield, Database, Download, Hexagon } from 'lucide-react';

const Hero = () => {
    const [text, setText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(150);

    const roles = [
        "Cloud DevOps Engineer",
        "Africa Cloud Engineer",
        "Data & ML Engineer",
        "Cloud Engineer",
        "Network Engineer",
        "DevSecOps Engineer",
        "IT Support Specialist",
        "Security Specialist",
        "MLOps Engineer"
    ];

    React.useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(100, 108, 255, 0.2) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(100, 108, 255, 0.1)',
                        color: 'var(--accent-primary)',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Based in Ethiopia, Serving Africa 🌍
                    </span>
                    <a href="https://www.cncf.io/training/kubestronaut/?_sft_lf-country=et" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <span style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: 'rgba(100, 108, 255, 0.1)',
                            color: 'var(--accent-primary)',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}>
                            Kubestronaut 🚀
                        </span>
                    </a>
                    <span style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                    }}>
                        16+ Years Experience
                    </span>
                </div>

                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', minHeight: '160px' }}>
                    Cloud & Network <br />
                    <span className="text-gradient">
                        {text}
                        <span style={{ borderRight: '3px solid var(--accent-primary)', marginLeft: '5px', animation: 'blink 0.7s infinite' }}></span>
                    </span>
                </h1>

                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Specializing in AWS, Azure, GCP, Infomaniak, Akamai, OpenStack, and Kubernetes. The premier <strong>DevOps Engineer in Ethiopia</strong>, delivering secure, scalable, and automated infrastructure solutions for <strong>Africa</strong> and the world.
                </p>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <a href="#projects" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a href="/Sofonias_Mengistu_Resume.pdf" download="Sofonias_Mengistu_Resume.pdf" style={{
                        padding: '0.8rem 1.5rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        textDecoration: 'none',
                        color: 'white'
                    }}>
                        Download CV <Download size={20} />
                    </a>
                    <a href="#contact" style={{
                        padding: '0.8rem 1.5rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        Contact Me
                    </a>
                </div>

                <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
                    {[
                        {
                            icon: <Cloud size={24} color="var(--accent-primary)" />,
                            label: "Multi-Cloud",
                            items: ["AWS", "Azure", "GCP", "Infomaniak", "Akamai", "OpenStack"]
                        },
                        {
                            icon: <Terminal size={24} color="var(--accent-primary)" />,
                            label: "Infrastructure as Code",
                            items: ["Terraform", "Pulumi", "CloudFormation", "ARM Templates"]
                        },
                        {
                            icon: <Hexagon size={24} color="var(--accent-primary)" />,
                            label: "Kubernetes",
                            items: ["EKS", "AKS", "GKE", "OpenShift", "Rancher"]
                        },
                        {
                            icon: <Shield size={24} color="var(--accent-primary)" />,
                            label: "DevSecOps",
                            items: ["Jenkins", "GitLab CI", "SonarQube", "ArgoCD", "Trivy"]
                        },
                        {
                            icon: <Database size={24} color="var(--accent-primary)" />,
                            label: "Data & MLOps",
                            items: ["Data Engineering", "MLflow", "Kubeflow", "BigQuery"]
                        }
                    ].map((stack, index) => (
                        <div key={index}
                            style={{ position: 'relative', cursor: 'pointer' }}
                            onMouseEnter={(e) => {
                                const tooltip = e.currentTarget.querySelector('.tooltip');
                                if (tooltip) tooltip.style.opacity = '1';
                                if (tooltip) tooltip.style.transform = 'translateY(-10px) translateX(-50%)';
                            }}
                            onMouseLeave={(e) => {
                                const tooltip = e.currentTarget.querySelector('.tooltip');
                                if (tooltip) tooltip.style.opacity = '0';
                                if (tooltip) tooltip.style.transform = 'translateY(0) translateX(-50%)';
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                {stack.icon}
                                <span>{stack.label}</span>
                            </div>

                            {/* Tooltip */}
                            <div className="tooltip" style={{
                                position: 'absolute',
                                bottom: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: 'rgba(20, 20, 20, 0.95)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '1rem',
                                borderRadius: '8px',
                                width: 'max-content',
                                maxWidth: '200px',
                                opacity: 0,
                                transition: 'all 0.3s ease',
                                pointerEvents: 'none',
                                zIndex: 10,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(10px)',
                                marginBottom: '10px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem',
                                    color: 'var(--text-primary)'
                                }}>
                                    {stack.items.map(item => (
                                        <span key={item} style={{ display: 'block', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.2rem' }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                {/* Arrow */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-6px',
                                    left: '50%',
                                    marginLeft: '-6px',
                                    width: '12px',
                                    height: '12px',
                                    backgroundColor: 'rgba(20, 20, 20, 0.95)',
                                    borderRight: '1px solid rgba(255,255,255,0.1)',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    transform: 'rotate(45deg)'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
