import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle, BackLink,
  StyledHr, MainHeading, BodyImage, MainHeading2} from '../styles/styledComponents';
  import im1 from '../assets/mazeGeneration.png';
  import im2 from '../assets/mazeGettingSolved.png';
  import im3 from '../assets/mazeSolved.png';
const MergeSortVis = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap', padding: '150px 25%', }}>
      {/* <div style={{display: 'flex', flexDirection:'row', flexWrap: 'nowrap', gap: '5px', justifyContent: 'center'}}>
        <BodyImage src={im1}/>
        <BodyImage src={im2}/>
        <BodyImage src={im3}/>
      </div> */}
      <MainHeading style={{color:'#333'}}>Maze Solver</MainHeading>
      <div style={{color: '#555', textAlign:'center'}}>This project, implemented in C, empowers users to design their own custom mazes by creating and saving a text file within the designated "maze" folder. Each text file represents a unique maze configuration, giving users full control over the layout and complexity of the maze. Once a maze is designed, the program provides a visual representation of the maze-solving process. Depending on the user's preference, they can select either the Breadth-First Search (BFS) or Depth-First Search (DFS) algorithm to solve the maze. The software then visually demonstrates the selected algorithm in action, showing the step-by-step process of how the maze is navigated and solved. This interactive approach offers an engaging way to explore the mechanics of both algorithms while allowing for endless variations of maze designs.</div>
      <a style={{textAlign: 'center'}} href="https://github.com/BenMcMillen/Maze-Solver" target="_blank" rel="noopener noreferrer">
            Github Repository
          </a>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im1}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Maze Creation</MainHeading2>
          <div style={{color:'#555'}}> This algorithm provides users with the ability to create custom mazes by generating a text file where walls are represented by the # symbol and open spaces are represented by blank spaces. The maze layout is entirely defined within this text file, allowing for great flexibility in designing complex or simple maze structures.</div>
        </div>
      </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im2}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Maze being Solved</MainHeading2>
          <div style={{color:'#555'}}>  Once the maze is created, the user can choose to solve it using either the Breadth-First Search (BFS) or Depth-First Search (DFS) algorithm, depending on their preference. The selected algorithm will then process the maze, finding the optimal path through the maze, and visually displaying how the algorithm explores and solves the maze step by step inside of the console. This system offers a dynamic and user-driven approach to both maze creation and solving, enhancing the interactive learning experience.</div>
        </div>
        
      </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im3}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Maze Solved</MainHeading2>
          <div style={{color:'#555'}}>Finally once the path which solves the maze is determined, the algorithm visually demosntrates backtracking from the end of the maze to the start of the maze using gold colouring.</div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BackLink to="/projects">Back to Projects</BackLink>
      </div>
    </div>
    
        
          
  </>;
};

export default MergeSortVis