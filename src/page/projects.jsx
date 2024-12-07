import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle,
  StyledHr, MainHeading} from '../styles/styledComponents';

const Projects = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>

    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '100px'}}>
      <MainHeading>Projects</MainHeading>
    </div>
    <StyledHr/>
    <div style={{display: 'flex', flexDirection: 'column', width:'100%', justifyContent: 'flex-start'}}>
      <ProjectBox onClick={() => {navigate('/projects/handgesturerobot')}}>
        <SquareImage src='src/assets/handGestureRobot.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start', overflow: 'hidden'}}>
          <InnerTitle>Hand Gesture Robot</InnerTitle>
          <InnerText>This project involves the development of a hand gesture-controlled robot, utilizing both Arduino and Python programming... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox>
        <SquareImage src='src/assets/handGestureRobot.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start'}}>
        <InnerTitle>Hand Gesture Robot</InnerTitle>
        <InnerText>This project involves the development of a hand gesture-controlled robot, utilizing both Arduino and Python programming... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox>
        <SquareImage src='src/assets/handGestureRobot.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start'}}>
        <InnerTitle>Hand Gesture Robot</InnerTitle>
        <InnerText>This project involves the development of a hand gesture-controlled robot, utilizing both Arduino and Python programming... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox>
        <SquareImage src='src/assets/handGestureRobot.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start'}}>
        <InnerTitle>Hand Gesture Robot</InnerTitle>
        <InnerText>This project involves the development of a hand gesture-controlled robot, utilizing both Arduino and Python programming... </InnerText>
        </div>
      </ProjectBox>

    </div>  
    <StyledHr/>
        
          
  </>;
};

export default Projects