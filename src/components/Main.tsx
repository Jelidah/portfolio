import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatarImage from '../assets/images/jelidah.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
              src={avatarImage}
              alt="Avatar"
              className="grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Jelidah" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jelidah-nayingwa-9422241a6/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jelidah Nayingwa</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Jelidah" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jelidah-nayingwa-9422241a6/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
