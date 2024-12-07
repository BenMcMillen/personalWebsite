import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle, BackLink,
  StyledHr, MainHeading, BodyImage, MainHeading2} from '../styles/styledComponents';
import im1 from '../assets/handGestureRobot.png';
import im2 from '../assets/handGesturerobotTransmitter.png';
import im3 from '../assets/ExamplehandMovement.png';

const HandGestureRobot = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap', padding: '150px 25%', }}>
      {/* <div style={{display: 'flex', flexDirection:'row', flexWrap: 'nowrap', gap: '5px', justifyContent: 'center'}}>
        <BodyImage src={im1}/>
        <BodyImage src={im2}/>
        <BodyImage src={im3}/>
      </div> */}
      <MainHeading style={{color:'black'}}>Hand Gesture Robot</MainHeading>
      <div style={{color: 'black', textAlign:'center'}}>This project involves the development of a hand gesture-controlled robot, utilizing both Arduino and Python programming. The system is designed to interpret hand movements through sensors or cameras, translating these gestures into commands that control the robot's actions. The Arduino platform is used to interface with the hardware components, such as motors and sensors, while Python code processes the gesture recognition, enabling seamless communication between the user and the robot. The result is an intuitive, hands-free control system that can be applied in a variety of robotic applications.</div>
      <a style={{textAlign: 'center'}} href="https://github.com/BenMcMillen/HandGestureRobot" target="_blank" rel="noopener noreferrer">
            Github Repository
          </a>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im1}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Main Body</MainHeading2>
          <div style={{color:'black'}}> The main body of the system consisted of an Arduino UNO, a motor controller, a receiver, and motors. This portion of the device received wireless signals from the computer, to which the transmitter was connected, and used these signals to control the individual motors. The system was designed to interpret commands such as Left, Right, Forward, Backward, and Stop, and powered the motors accordingly to execute the desired movement of the robot. The communication between the transmitter and receiver enabled real-time control, allowing the robot to respond to the user's input.</div>
        </div>
      </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im2}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Transmitter</MainHeading2>
          <div style={{color:'black'}}> The second Arduino UNO served as the control unit connected to the transmitter, responsible for sending commands to the robot. It processed input signals, such as those generated by hand gestures or other control interfaces, and translated them into specific instructions. These instructions were then transmitted wirelessly to the receiver on the robot's main body. This setup ensured seamless communication, enabling the robot to perform movements such as Left, Right, Forward, Backward, and Stop based on the user's commands.</div>
        </div>
        
      </div>
      <div style={{display: 'flex', gap: '20px', marginTop: '50px', flexWrap: 'wrap'}}>
        <BodyImage src={im3}/>
        <div style={{flex: '1'}}>
          <MainHeading2>Hand Gesture AI</MainHeading2>
          <div style={{color:'black'}}>The Python software played a crucial role in the system, utilizing the OpenCV library to interpret hand gestures captured through a camera. Leveraging AI-based algorithms, the software analyzed the gestures in real-time and translated them into corresponding control messages. These messages were then sent to the Arduino UNO connected to the transmitter, enabling precise and responsive control of the robot. This integration of computer vision and AI provided an intuitive, user-friendly interface, transforming hand movements into actionable commands for the robot.</div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <BackLink to="/projects">Back to Projects</BackLink>
      </div>
    </div>
    

    
        
          
  </>;
};

export default HandGestureRobot