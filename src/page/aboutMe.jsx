import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton,
  StyledHr, MainHeading, CircleImage, InvertStyledButton} from '../styles/styledComponents';
import im1 from '../assets/ProfilePicture.jpg';
import im2 from '../assets/icons8-linkedin.svg';
const AboutMe = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
        <div style={{display: 'flex', flexDirection:'column', textAlign: 'center', alignContent: 'center', alignItems: 'center', paddingLeft: '25%', paddingRight: '25%', gap:'10px'}}>
          <CircleImage src={im1} alt='Profile Picture'/>
          <MainHeading>About Me</MainHeading>
          <div style={{color: 'black'}}> Hello! My name is Ben, and I’m a final-year Mechatronics Engineering and Computer Science student at UNSW. Currently, I am a Casual Academic at UNSW, where I have the opportunity to work closely with students, as well as an Embedded Systems Engineering Intern at Endeavour Aerospace. I am passionate about robotics and embedded systems and enjoy working on projects that blend innovation with practical solutions.</div>
          <a href="https://www.linkedin.com/in/ben-mcmillen-b587b7227/" target="_blank" rel="noopener noreferrer">
            <img src={im2} alt="LinkedIn" />
          </a>
          <div style={{display: 'flex', gap:'5px'}}>
            <StyledButton onClick={() =>{navigate('/experience')}}>View my Experience</StyledButton>
            <InvertStyledButton onClick={() =>{navigate('/projects')}}>View My Projects</InvertStyledButton>
          </div>
          
        </div>
      </div>
    </>
        

        
          
  </>;
};

export default AboutMe