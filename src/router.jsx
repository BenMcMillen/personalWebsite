import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { NavBar, NavBarBtn, GlobalBodyStyle, Logo, StyledButton, BackgroundMainDiv, InvertStyledButton } from './styles/styledComponents';
import AboutMe from './page/aboutMe';
import Projects from './page/projects'
import Experience from './page/Experience';
function Router() {
  // Initialising all variales
  const navigate = useNavigate();


  // use effect which navigates to the correct location given a change in pathname or token
  useEffect(() => {
      navigate('/aboutme');
  }, [])

  return (
    <>
    <GlobalBodyStyle/>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100vh', width: '100vw' }}>
        <NavBar>
          <NavBarBtn>
            {/* <Logo>Presto</Logo> */}
          </NavBarBtn>
          <NavBarBtn>
            <InvertStyledButton onClick={() => {navigate('/aboutme')}}>About Me</InvertStyledButton>
            <InvertStyledButton onClick={() => {navigate('/experience')}}>Experience</InvertStyledButton>
            <InvertStyledButton onClick={() => {navigate('/projects')}}>Projects</InvertStyledButton>

          </NavBarBtn>
        </NavBar>
        <div style={{flex: '1'}}>
        <Routes>
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        </div>
      </div>
    </>
  )
}

export default Router