import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle,
  StyledHr, MainHeading} from '../styles/styledComponents';

const HandGestureRobot = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '100px'}}>
      <MainHeading style={{color:'black'}}>Hand Gesture Robot</MainHeading>
    </div>
    
        
          
  </>;
};

export default HandGestureRobot