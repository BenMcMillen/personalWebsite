import styled, { createGlobalStyle } from 'styled-components';


// global style for entire website such that margins are removed and font is consistant
export const GlobalBodyStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');  
  body{
        margin: 0px;
        font-family: 'Arial';
        color: '#4A628A';
        background-color: white;
        width: 100vw;
        height: 100vh
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
  margin: '10px 80px',
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
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  padding: '0px 30px',
  flex: '1'
}));

export const CircleImage = styled.img(() => ({
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  border: '6px solid #4A628A',
}));