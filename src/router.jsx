import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { NavBar, NavBarBtn, GlobalBodyStyle, Logo, StyledButton, BackgroundMainDiv, InvertStyledButton } from './styles/styledComponents';
import AboutMe from './page/aboutMe';
import Projects from './page/projects'
import Experience from './page/Experience';
import HandGestureRobot from './page/handgesture';
import MergeSortVis from './page/mergeSortVis';
import MazeSolver from './page/mazesolver';
import WebPage from './page/webpage';
import RobotImp from './page/robotImp';
function Router() {
  // Initialising all variales
  const navigate = useNavigate();


  // use effect which navigates to the correct location given a change in pathname or token
  useEffect(() => {
      navigate('/');
  }, [])

  return (
    <>
    <GlobalBodyStyle/>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: 'auto', width: '100vw' }}>
        <NavBar>
          <NavBarBtn>
            {/* <Logo>Presto</Logo> */}
          </NavBarBtn>
          <NavBarBtn>
            <InvertStyledButton onClick={() => {navigate('/')}}>About</InvertStyledButton>
            <InvertStyledButton onClick={() => {navigate('/experience')}}>Experience</InvertStyledButton>
            <InvertStyledButton onClick={() => {navigate('/projects')}}>Projects</InvertStyledButton>

          </NavBarBtn>
        </NavBar>
        <div style={{flex: '1'}}>
        <Routes>
          <Route path="/" element={<AboutMe/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects/handgesturerobot" element={<HandGestureRobot/>} />
          <Route path="/projects/mergesortvis" element={<MergeSortVis/>} />
          <Route path="/projects/mazesolver" element={<MazeSolver/>} />
          <Route path="/projects/webpage" element={<WebPage/>} />
          <Route path="/projects/robotimplementation" element={<RobotImp/>} />
        </Routes>
        </div>
      </div>
    </>
  )
}

export default Router