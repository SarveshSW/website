import React from 'react'
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constant.js'
import styled from 'styled-components';
//import _default from '../../themes/default';
import { Modal } from '@mui/material';

export const Container = styled.div`
    background-color: ${({theme}) => theme.bgLight};    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

const ModalContent = styled.div`
    background: ${({ theme }) => theme.card};
    padding: 20px;
    border-radius: 10px;
    transform: translate(0%,20%);
    width: 80%;
    max-width: 600px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: auto;
    max-height: 100%;
    min-height:20vh;
    margin: auto;
`;
const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.black + 40};
    padding: 2px 8px;
    border-radius: 10px;
`
const Image = styled.img`
    width: 100%;
    height: 300px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`
const Video = styled.video`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`
const Projects = () => {
  const [toggle, setToggle] = useState('all');
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const handleCloseModal = () => setOpenModal({ state: false, project: null });
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
        Throughout my Academic journey, I have been involved in multiple projects requiring various disciplines which have helped shape me into a well-rounded software developer and engineer.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web-App' ?
            <ToggleButton active value="Web-App" onClick={() => setToggle('Web-App')}>WEB-APPS</ToggleButton>
            :
            <ToggleButton value="Web-App" onClick={() => setToggle('Web-App')}>WEB-APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'Robotics' ?
            <ToggleButton active value="Robotics" onClick={() => setToggle('Robotics')}>ROBOTICS</ToggleButton>
            :
            <ToggleButton value="Robotics" onClick={() => setToggle('Robotics')}>ROBOTICS</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="Machine Learning Project" onClick={() => setToggle('Machine Learning Project')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="Machine Learning Project" onClick={() => setToggle('Machine Learning Project')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
      <Modal open={openModal.state} onClose={handleCloseModal}>
        <ModalContent>
          {openModal.project && (
            <>
              <h2>{openModal.project.title}</h2>
               {openModal.project.mediaType === 'image' ? (
                <Image src={openModal.project.mediaUrl}/>
              ) : (
                <Video src={openModal.project.mediaUrl} type="video/quicktime" controls/>

              )}
              <Tags>
                {openModal.project.tags?.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
              <p>{openModal.project.description}</p>
              <p>{openModal.project.date}</p>
            </>
          )}
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Projects 