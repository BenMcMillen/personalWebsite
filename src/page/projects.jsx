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
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start', overflow: 'hidden', maxWidth:'800px'}}>
          <InnerTitle>Hand Gesture Robot</InnerTitle>
          <InnerText>This project involves the development of a hand gesture-controlled robot, utilizing both Arduino and Python programming... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox onClick={() => {navigate('/projects/mergesortvis')}}>
        <SquareImage src='src/assets/mergeSortVisHalf.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start',maxWidth:'800px'}}>
        <InnerTitle>Merge Sort Visualizer</InnerTitle>
        <InnerText>This program is a Simple Merge Sort Visualizer. It acts to both generate 100 random numbers ranging from 1-100 using the provided "Generate" button and then sorts these numbers using merge sort using the "Sort" button... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox onClick={() => {navigate('/projects/mazesolver')}}>
        <SquareImage src='src/assets/mazeGettingSolved.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start',maxWidth:'800px'}}>
        <InnerTitle>Maze Solver</InnerTitle>
        <InnerText>This project gives the user the ability to design their own maze by creating a text file in the maze folder. Also providing a visulation of how these mazes are solved... </InnerText>
        </div>
      </ProjectBox>
      <ProjectBox onClick={() => {navigate('/projects/webpage')}}>
        <SquareImage src='src/assets/webpage.png'/>
        <div style={{display: 'flex',flexDirection:'column', justifyContent: 'flex-start',maxWidth:'800px'}}>
        <InnerTitle>This WebSite</InnerTitle>
        <InnerText> This website was designed as a way to highlight both my experience and projects completed... </InnerText>
        </div>
      </ProjectBox>

    </div>  
    <StyledHr/>
        
          
  </>;
};

export default Projects