import React from 'react';
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from 'styled-components';
import {DiAptana} from 'react-icons/di';
import {FaBars} from 'react-icons/fa';
import { Bio } from '../../data/constant.js';
const Nav = styled.div`
    background: ${({theme}) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid ${({theme}) => theme.section_color};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    
    @media (max-width: 960px) {
        height: 70px;
    }
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;
const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
`;
    
    /* &.active {
     border-bottom: 2px solid ${({ theme }) => theme.primary};
   } */ 
   
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;  
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const GitHubButton = styled.a`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}DD);
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.bg};
  padding: 0 24px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  height: 70%;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 8px ${({ theme }) => theme.primary}30;
  
  &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px ${({ theme }) => theme.primary}40;
  }
  
  &:active {
      transform: translateY(0);
  }
  
  @media screen and (max-width: 768px) { 
      font-size: 0.9rem;
      padding: 0 16px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.bgLight+99};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};

`;

export const MobileLink = //styled(LinkR)`
styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
/*&.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }*/


const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
    return(
    <Nav>
      <NavContainer>
          <NavLogo to = "/">
          <span style={{ display: "flex", alignItems: "center", color: theme.text_primary, marginBottom: '20', cursor: 'pointer', textDecoration: 'none' }}>
            <DiAptana size="3rem" /> <Span>Sarvesh Wanzare</Span>
          </span>
          </NavLogo>
          <MobileIcon>
            <FaBars
              onClick={() => { 
                setOpen(!open);
              }} />
            
          </MobileIcon>
          <NavItems>
              <NavLink href='#about'>About</NavLink>
              <NavLink href='#skills'>Skills</NavLink>
              <NavLink href='#experience'>Experience</NavLink>
              <NavLink href='#projects'>Projects</NavLink>
              <NavLink href='#education'>Education</NavLink>
          
          </NavItems>
          <ButtonContainer>
              <GitHubButton href={Bio.github} target="_blank">GitHub Profile</GitHubButton>
          </ButtonContainer>
      {
        // if the Mobile icon is clicked then do the following
        open && 
          (<MobileMenu open={open}>
              <MobileLink 
                href="#about" 
                onClick={() => {
                  setOpen(!open);
                }}
              >
              About
              </MobileLink>

            <MobileLink 
              href='#skills' 
              onClick={() => { 
                setOpen(!open);
              }}
            >
              Skills
            </MobileLink>

            <MobileLink
              href='#experience'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Experience
            </MobileLink>

            <MobileLink 
              href='#projects' 
              onClick={() => {
                setOpen(!open);
              }}
            >
              Projects
            </MobileLink>

            <MobileLink 
              href='#education' 
              onClick={() => {
                setOpen(!open);
              }}  
            >
              Education
            </MobileLink>
            <GitHubButton 
              style={{
                  padding: '10px 16px',
                  background: `${theme.primary}`, 
                  color: 'black',
                  width: 'max-content'}}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )
      }
      </NavContainer>
      </Nav>);
};

export default NavBar;