import React from 'react';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Highlighted Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <h2>Bond Investment Prediction System</h2>
                    <p>Developed a time-series model using Zambian bond data to simulate monthly investment strategies and optimize reinvestment schedules.</p>
                </div>

                <div className="project">
                    <h2>Automated Report Generation System</h2>
                    <p>Created an NLP tool that generates system documentation from codebases, reducing manual effort by 80% and improving developer onboarding.</p>
                </div>

                <div className="project">
                    <h2>Age Estimation Using Ocular Biometrics</h2>
                    <p>Trained a CNN model to estimate age from ocular images with over 90% accuracy for biometric identification in healthcare settings.</p>
                </div>

                <div className="project">
                    <h2>SmartCare Reporting Services</h2>
                    <p>Built OLTP/OLAP database pipelines and ETL workflows to support real-time, nationwide health reporting in SmartCare Pro.</p>
                </div>

                <div className="project">
                    <h2>SmartCare Pro</h2>
                    <p>Developed ASP.NET Core + EF Core backend modules powering HIV testing, patient reassignment, and billing automation workflows.</p>
                </div>

                <div className="project">
                    <h2>SmartCare Plus and Legacy</h2>
                    <p>Enhanced legacy SmartCare platforms through SQL debugging and full-stack migration support, resolving over 95% of Tier 3 system issues.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
