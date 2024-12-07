import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle,
  StyledHr, MainHeading, MainHeading2} from '../styles/styledComponents';

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
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start', overflow: 'hidden', maxWidth:'800px'}}>
            <MainHeading2>Hand Gesture Robot</MainHeading2>
            <InnerText>This project involves the development of a hand gesture-controlled robot, utilizing both Arduino and Python programming... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox onClick={() => {navigate('/projects/robotimplementation')}}>
        <SquareImage src='src/assets/sim.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start', overflow: 'hidden', maxWidth:'800px'}}>
            <MainHeading2>Robot Implementation</MainHeading2>
            <InnerText>This project is a robotic car system designed to showcase advanced programming concepts and efficient code organization... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox onClick={() => {navigate('/projects/mergesortvis')}}>
        <SquareImage src='src/assets/mergeSortVisHalf.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start',maxWidth:'800px'}}>
          <MainHeading2>Merge Sort Visualizer</MainHeading2>
          <InnerText>This program is a Simple Merge Sort Visualizer. It acts to both generate 100 random numbers ranging from 1-100 using the provided "Generate" button and then sorts these numbers using merge sort using the "Sort" button... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox onClick={() => {navigate('/projects/mazesolver')}}>
        <SquareImage src='src/assets/mazeGettingSolved.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start',maxWidth:'800px'}}>
          <MainHeading2>Maze Solver</MainHeading2>
          <InnerText>This project gives the user the ability to design their own maze by creating a text file in the maze folder. Also providing a visulation of how these mazes are solved... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox onClick={() => {navigate('/projects/webpage')}}>
        <SquareImage src='src/assets/webpage.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start',maxWidth:'800px'}}>
          <MainHeading2>This WebSite</MainHeading2>
          <InnerText> This website was designed as a way to highlight both my experience and projects completed... </InnerText>
        </div>
      </ProjectBox>

    </div>  
    <StyledHr/>
        
          
  </>;
};

export default Projects