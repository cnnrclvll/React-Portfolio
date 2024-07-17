import React from 'react';
import CV from '../../assets/Colvill_CV.pdf';
// import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    <div>
      <a href={CV} download='Colvill_CV'>Download Curriculum Vitae</a>
    </div>
  );
};

export default Resume;
