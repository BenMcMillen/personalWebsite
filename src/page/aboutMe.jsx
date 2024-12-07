import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton,
  StyledHr, MainHeading, CircleImage} from '../styles/styledComponents';

const AboutMe = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>
        
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
        <h1>All Presentations</h1>
        <div>
          <CircleImage src='src/assets/ProfilePicture.jpg' alt='Profile Picture'/>
          <MainHeading>About Me</MainHeading>


        </div>
      </div>
    </>
        

        
          
  </>;
};

export default AboutMe