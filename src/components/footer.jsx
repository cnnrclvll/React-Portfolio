import React from 'react';
import github from '../assets/icons/github/github-mark/github-mark-white.svg'
import indeed from '../assets/icons/indeed/Indeed_2023_Logo_Icon_Favicon/Icon/SVG/Indeed_2021_Icon_RGB_White.svg'
import stack from '../assets/icons/stack/logo-stackoverflow.svg'

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/cnnrclvll" className="github-a" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="Github" className="github" />
      </a>
      <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend" className="indeed-a"  target="_blank" rel="noopener noreferrer">
        <img src={indeed} alt="Indeed" className="indeed" />
      </a>
      <a href="https://stackoverflow.com/users/26410393/connor-colvill" className="stack-a" target="_blank" rel="noopener noreferrer">
        <img src={stack} alt="Stack Overflow" className="stack" />
      </a>
    </footer>
  );
};

export default Footer;
