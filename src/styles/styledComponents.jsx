import styled, { createGlobalStyle } from 'styled-components';


// global style for entire website such that margins are removed and font is consistant
export const GlobalBodyStyle = createGlobalStyle`
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
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  border: "1px solid #4A628A",

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
export const MainHeading = styled.h2(() => ({
  fontWeight: '600',
  margin: '5px 0',
  color: 'black',
  fontFamily:'Roboto',
  textTransform: 'uppercase',
  backgroundColor: 'white', 
  borderRadius:'5px',
  padding:'5px',
  width: "98px",
  marginBottom: "0px",
  textDecoration: "underline"
}));

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
  gap: "7px"
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