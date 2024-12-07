import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle,
  StyledHr, MainHeading, BodyImage, MainHeading2} from '../styles/styledComponents';

const WebPage = function({ }) {
  // Initilise local varaibles
  const navigate = useNavigate();
  
  
  return <>

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexWrap: 'wrap', padding: '0 25%', }}>
      {/* <div style={{display: 'flex', flexDirection:'row', flexWrap: 'nowrap', gap: '5px', justifyContent: 'center'}}>
        <BodyImage src={im1}/>
        <BodyImage src={im2}/>
        <BodyImage src={im3}/>
      </div> */}
      <MainHeading style={{color:'black'}}>This Website</MainHeading>
      <div style={{color: 'black', textAlign:'center'}}>I created this website to showcase my experience and projects, providing a centralized platform where I can present my work and skills in a professional manner. By using ReactJS, I was able to build a dynamic and responsive interface that allows for seamless navigation and interaction. React’s component-based architecture enabled me to organize and manage my projects efficiently, ensuring a smooth user experience across different devices and screen sizes. This project not only highlights my technical expertise but also serves as a personal portfolio to demonstrate my growth and achievements in the field.</div>
      <a style={{textAlign: 'center'}} href="https://github.com/BenMcMillen/personalWebsite" target="_blank" rel="noopener noreferrer">
            Github Repository
          </a>
    </div>
    
        
          
  </>;
};

export default WebPage