import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss'; // Assuming this exists

const labelsFirst = [
    "React.js",
    "Next.js",
    "ASP.NET Core (C#)",
    "Spring Boot",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "SOAP",
    "OAuth 2.0",
    "Keycloak"
];

const labelsSecond = [
    "Docker",
    "Kubernetes",
    "Git",
    "SSMS",
    "PGAdmin",
    "Visual Studio",
    "CI/CD",
    "ETL",
    "SSIS"
];

const labelsThird = [
    "Python",
    "R",
    "Scikit-learn",
    "PyTorch",
    "LLMs",
    "LangChain",
    "Streamlit",
    "Hugging Face",
    "Groq"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    {/* Full Stack Web Dev */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Development</h3>
                        <p>
                            I develop scalable frontend and backend applications using React.js, Next.js, Spring Boot, and ASP.NET Core.
                            I've led national-scale deployments for health systems serving 400+ clinics, including SmartCare Pro and Point-of-Care modules.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* DevOps */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & System Integration</h3>
                        <p>
                            I build reliable DevOps pipelines, automate deployment workflows, and optimize backend data pipelines (ETL/SSIS).
                            I’ve streamlined national reporting systems and supported data migration for over 1M patient records.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    {/* AI / ML */}
                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>AI & Machine Learning</h3>
                        <p>
                            I specialize in building LLM-integrated systems using PyTorch, LangChain, and Hugging Face.
                            I'm currently pursuing a Master's in AI at Yeshiva University and developing RAG systems with Groq and vector DBs like Qdrant.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
