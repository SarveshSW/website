import React from 'react';
import styled from "styled-components";
import {Bio} from "../../data/constant.js";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../media/Sarvesh-Headshot-Cropped.jpg";
const HeroContainer = styled.div`
    background: linear-gradient(135deg, ${({theme}) => theme.bgLight} 0%, ${({theme}) => theme.bg} 100%);
    display: flex;
    justify-content: center;
    position: relative;
    padding: 100px 30px;
    min-height: 100vh;
    z-index: 1;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, ${({theme}) => theme.primary}20, transparent);
        border-radius: 50%;
        top: -100px;
        right: -100px;
        pointer-events: none;
    }
    
    &::after {
        content: '';
        position: absolute;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, ${({theme}) => theme.primary}15, transparent);
        border-radius: 50%;
        bottom: -100px;
        left: -100px;
        pointer-events: none;
    }
    
    @media (max-width: 960px) {
        padding: 80px 20px;
        min-height: auto;
    }
    
    @media (max-width: 640px) {
        padding: 60px 16px;
    }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 110%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    width:100%;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 965px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;


export const Title = styled.div`
  font-weight: 800;
  font-size: 56px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 72px;
  letter-spacing: -1px;
  
  @media (max-width: 960px) {
    text-align: center;
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const SubText = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 68px;
  
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const SpanTypeWriter = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  gap: 12px;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 100%;
    max-width: 280px;
    text-align: center;
    padding: 14px 32px;
    color: ${({ theme }) => theme.bg};
    background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}DD);
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s ease-in-out !important;
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 4px 16px ${({ theme }) => theme.primary}30;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px ${({ theme }) => theme.primary}50;
    }
    
    &:active {
        transform: translateY(-1px);
    }
    
    @media (max-width: 960px) {
        max-width: 250px;
    }

    @media (max-width: 640px) {
        padding: 12px 24px;
        font-size: 16px;
        max-width: 200px;
    } 
`;


export const Image = styled.img`
    width: 100%;
    position: relative;
    border-radius: 16px;
    margin-right: -50px;
    max-height: 450px;
    max-width: 400px;
    object-fit: cover;
    object-position: center;
    border: 3px solid ${({theme}) => theme.primary};
    box-shadow: 0 8px 32px ${({theme}) => theme.primary}30;
    transition: all 0.3s ease-in-out;
    
    @media (max-width: 768px) {
        margin-right: 0px;
        max-width: 320px;
        max-height: 380px;
    }
    
    @media (max-width: 640px) {
        margin-right: 0px;
        max-width: 250px;
        max-height: 300px;
    }
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 48px ${({theme}) => theme.primary}40;
    }
`;

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
            <HeroInnerContainer>
                <HeroLeftContainer>
                  <Title>Hello, I am <br />
                  {Bio.name}
                  </Title> 
                  <SubText>
                    I am a <br />
                    </SubText> 
                    <SpanTypeWriter>
                        <Typewriter
                            options ={{
                                strings: Bio.roles,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </SpanTypeWriter>
                    <SubTitle>{Bio.description}</SubTitle>
                    <ResumeButton href={Bio.resume} target="display">Download CV</ResumeButton>
                </HeroLeftContainer>
                <HeroRightContainer>
                <Image src={ProfilePic} alt="ProfilePic" />
                </HeroRightContainer>
            </HeroInnerContainer>
            </HeroContainer>
        </div>
    );
}

export default Hero;
