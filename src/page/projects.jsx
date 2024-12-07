import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton,
  StyledHr} from '../styles/styledComponents';

const Projects = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>
        
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
        <h1>All Presentations</h1>
        <div>
          <StyledButton>New Presentation +</StyledButton>
        </div>

      </div>
      <StyledHr/>

    </>
        
    <StyledHr/>
        
          
  </>;
};

export default Projects