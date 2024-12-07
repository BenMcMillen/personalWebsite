import styled, { createGlobalStyle } from 'styled-components';


// global style for entire website such that margins are removed and font is consistant
export const GlobalBodyStyle = createGlobalStyle`
 body{
        margin: 0px;
        font-family: 'Arial';
        color: '#4A628A';
        background-color: white;
        width: 100vw;
        height: auto;
    }
`;

// Styling for nav bar buttons
export const NavBarBtn = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
}));

// Styled button
export const StyledButton = styled.button(() => ({
  backgroundColor: '#4A628A',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '5px',
  borderRadius: '30px',
  fontWeight:'700',
  transition: 'background-color 0.3s ease',
  // on hover add effect
  '&:hover': {
    backgroundColor: 'deepskyblue',
  },
}));

// Styled button with inverted colours
export const InvertStyledButton = styled.button(() => ({
  backgroundColor: 'white',
  color: '#4A628A',
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '30px',
  transition: 'background-color 0.3s ease',
  border: "3px solid #4A628A",
  fontWeight: '700',

  // on hover add effect
  '&:hover': {
    backgroundColor: 'deepskyblue',
  },
}));

// Styled HR to be coloured
export const StyledHr = styled.hr(() => ({
  border: 'none',
  borderTop: '2px solid #7AB2D3',
  margin: '10px 15%',
  width: 'auto',
}));

// Styling for text for Logo usage
export const Logo = styled.h3(({darkMode}) => ({
  fontSize: '1.5em',
  fontWeight: '600',
  margin: '5px 0',
  color: '#4A628A',
  textAlign: 'left',
  textTransform: 'uppercase',
  backgroundColor: darkMode? '#0a0a0a':'white', 
  borderRadius:'5px',
  padding:'5px',
  border: "2px solid #4A628A",
  width: "98px",
  marginBottom: "0px",
}));

// Styling for main heading text
export const MainHeading = styled.h2`
    font-family: 'Ubuntu', Arial, sans-serif;
    font-weight: 700;
    font-size: 3em;
    margin: 5px 0;
    color: black;
    text-transform: uppercase;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 100%;
    
`;

// styling for main body text
export const MainBody = styled.div(({darkMode}) => ({
  fontWeight: '600',
  margin: '5px 0',
  color: '#4A628A',
  textTransform: 'uppercase',
  backgroundColor: darkMode ? "#0a0a0a" : "white",
  borderRadius:'5px',
  padding:'5px',
  marginBottom: "0px",
  display: "flex",
  flexDirection: 'column',
  gap: "7px",
}));

// styling for header text
export const StyledHeader = styled.div(({darkMode}) => ({
  backgroundColor: darkMode ? "#0a0a0a" : "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap",
  padding: "4px 0px",
}));

// Styling of background colour for main body div
export const BackgroundMainDiv = styled.div`
  background-color: ${(props) => (props.darkMode ? '#0a0a0a' : '#ffffff')};
  transition: background-color 0.3s ease;
  height: 100%;
  width: 100%;
`;

// Styling fo the Nav bar
export const NavBar = styled.div(({darkMode}) => ({
  backgroundColor: darkMode ? '#121212' : '#4A628A',
  display: 'flex',
  maxHeight: '90px',
  minHeight: '90px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '0px 30px',
  flex: '1',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0'
}));

export const CircleImage = styled.img(() => ({
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  border: '6px solid #4A628A',
}));


export const ProjectBox = styled.div(({darkMode}) => ({
  backgroundColor: darkMode ? '#121212' : 'white',
  border: '5px solid #4A628A',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'flex-start',
  maxHeight: '250px',
  minHeight: '250px',
  maxWidth: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '100px',
  flex: '1',
  margin:'10px 300px',
  padding: '10px 70px',
  overflow: 'hidden',
}));

export const SquareImage = styled.img(() => ({
  borderRadius: '20px',
  width: '220px',
  height: '220px',
  border: '6px solid #4A628A',
}));


export const InnerText = styled.div`
    font-family: 'Ubuntu', Arial, sans-serif;
    font-weight: 700;
    font-size: 1.2em;
    margin: 5px 0;
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 100%;
    overfow: hidden;
`;
export const InnerTitle = styled.div`
    font-family: 'Ubuntu', Arial, sans-serif;
    font-weight: 700;
    font-size: 1.8em;
    margin: 5px 0;
    color: black;
    text-transform: uppercase;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    width: 100%;
    text-decoration: underline;
    overfow: hidden;
`;

export const BodyImage = styled.img(() => ({
  maxWidth: '400px',
  maxHeight: '400px',
  flex: '1',

  '@media (max-width: 650px)': {
    maxWidth: '250px', // Decrease the max width
    maxHeight: '250px', // Decrease the max height
  },
}));

export const MainHeading2 = styled.h2`
    font-family: 'Ubuntu', Arial, sans-serif;
    font-weight: 700;
    font-size: 2.2em; /* Default font size */

    color: black;
    text-transform: uppercase;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
    display: inline-block;

    @media (max-width: 650px) {
        font-size: 1.8em; /* Decrease font size for smaller screens */
    }`