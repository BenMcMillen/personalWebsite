import React from 'react';

import styled from 'styled-components';
import im1 from '../assets/EAlogo.png';
import im2 from '../assets/UNSW-1-300x300.png';
import im3 from '../assets/images.png';
import { StyledButton, ProjectBox,SquareImage, InnerText, InnerTitle,
  StyledHr, MainHeading, BodyImage, MainHeading2, BackLink} from '../styles/styledComponents';
// Styled-components for layout and styling
const Container = styled.div`
  padding: 40px;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  padding: 120px 15%;
`;

const Section = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const SectionContent = styled.div`
  flex: 1;
  color: #555;
  font-size: 1.1em;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.8em;
  text-transform: uppercase;
  margin-bottom: 15px;
  @media (max-width: 650px) {
        font-size: 1.3em; /* Decrease font size for smaller screens */
  }
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  flex: 0 1 auto;
  border-radius: 8px;
  border: 2px solid grey;
`;

const Experience = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center', color: '#222' }}>My Professional Experience</h1>

      {/* Embedded Systems Engineering Intern at Endeavour Aerospace Section */}
      <Section>
        <Image src={im1} alt="Embedded Systems Engineering Intern at Endeavour Aerospace" />
        <SectionContent>
          <SectionTitle>Embedded Systems Engineering Intern at Endeavour Aerospace</SectionTitle>
          <p>
            As an Embedded Systems Engineering Intern at Endeavour Aerospace, I worked on the design and development of embedded systems for aerospace applications. I gained hands-on experience with low-level programming, and real-time systems, contributing to key projects and collaborating with engineers to enhance system performance.
          </p>
        </SectionContent>
      </Section>

      {/* UNSW Casual Academic Section */}
      <Section>
        <Image src={im2} alt="UNSW Casual Academic" />
        <SectionContent>
          <SectionTitle>UNSW Casual Academic</SectionTitle>
          <p>
          As a Casual Academic at UNSW, I have had the privilege of leading and presenting in various teaching environments, ranging from intimate lab sessions to large-scale workshops. I demonstrated key concepts in mechatronics and computer science to undergraduate students, breaking down complex theories through practical examples and hands-on demonstrations. My experience includes conducting lab sessions for groups of 24 students, facilitating workshops for up to 30 students, and delivering content to audiences of up to 100 students in larger workshop settings. I have provided one-on-one support to students during lab sessions, ensuring a deeper understanding of the material. The courses I have demonstrated for include MTRN3500, MMAN2300, and DESN2000, showcasing my versatility and commitment to fostering academic success across diverse learning environments.
          </p>
        </SectionContent>
      </Section>

       {/* High School Mathematics Tutor Section */}
       <Section>
        <Image src={im3} alt="High School Mathematics Tutor" />
        <SectionContent>
          <SectionTitle>High School Mathematics Tutor</SectionTitle>
          <p>
            During my time as a High School Mathematics Tutor, I helped students build a deep understanding of mathematical concepts and improve their grades. I tailored lessons to meet the individual needs of each student, covering topics from algebra to calculus, and provided personalized problem-solving techniques.
          </p>
        </SectionContent>
      </Section>
      

      {/* Back to Home Link */}
      <div style={{ textAlign: 'center' }}>
        <BackLink to="/">Back to Home</BackLink>
      </div>
    </Container>
  );
};

export default Experience;
