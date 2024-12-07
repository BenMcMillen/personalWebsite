import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle, BackLink,
  StyledHr, MainHeading, BodyImage, MainHeading2} from '../styles/styledComponents';
  import im1 from '../assets/threads.png';
  import im2 from '../assets/sim.png';
const RobotImp = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap', padding: '150px 25%', }}>
      {/* <div style={{display: 'flex', flexDirection:'row', flexWrap: 'nowrap', gap: '5px', justifyContent: 'center'}}>
        <BodyImage src={im1}/>
        <BodyImage src={im2}/>
        <BodyImage src={im3}/>
      </div> */}
      <MainHeading style={{color:'#333'}}>Robot Implementation</MainHeading>
      <div style={{color: '#555', textAlign:'center'}}>This project is a robotic car system developed as part of a university coursework project, designed to showcase advanced programming concepts, embedded systems integration, and efficient code organization using C++. The development heavily relies on threading and thread management, including monitoring thread heartbeats to ensure robust and responsive system performance. Embedded systems are at the core of the project, with the robotic car utilizing microcontrollers and sensors to enable real-time interaction with its environment. By leveraging object-oriented programming principles, the project demonstrates the ability to design and implement modular, scalable code structures in C++. Additionally, the program is organized across multiple files, highlighting strong skills in managing and integrating complex, multi-file codebases. This university project serves as a comprehensive demonstration of C++ programming, embedded systems, and software engineering practices applied to robotics, balancing performance, hardware-software integration, and maintainability.</div>
      <a style={{textAlign: 'center'}} href="https://github.com/BenMcMillen/Robot_ImplementationV1" target="_blank" rel="noopener noreferrer">
            Please Request for Github Access
          </a>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im1}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Multi File / Thread software</MainHeading2>
          <div style={{color:'#555'}}>The project involved implementing the code for the Robot to function. This involved multiple modules including vehicle control, Laser, GNSS, thread management, and controller modules.</div>
        </div>
      </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im2}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Works for Simulator and Actual Robot</MainHeading2>
          <div style={{color:'#555'}}>The software itself worked for the provided simulator and physical robot</div>
        </div>
        
      </div>
      <div style={{ textAlign: 'center' }}>
        <BackLink to="/projects">Back to Projects</BackLink>
      </div>
    </div>
    
        
          
  </>;
};

export default RobotImp