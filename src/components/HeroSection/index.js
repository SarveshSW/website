import React from 'react';
import styled from "styled-components";
import {Bio} from "../../data/constant.js";
import Typewriter from "typewriter-effect";
import ProfilePic from "../../media/HeroImage.jpg"
const HeroContainer = styled.div`
    background-color: ${({theme}) => theme.bgLight};
    display: flex;
    justify-content: center;
    postion:relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
      }
      @media (max-width: 640) {
        padding: 32px 16px;
      }
      min-height: 40vh;
    z-index: 1;
    
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
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const SubText = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
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
/*
export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;*/
export const SpanTypeWriter = styled.span`
  color: ${({ theme }) => theme.black};
  cursor: pointer;
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
`;
export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 30%;
    max-width: 300px;
    text-align: center;
    padding: 10px 0px;
    color:${({ theme }) => theme.black};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: ;
    
    box-shadow:  5px 5px 5px #1F2634,
    -5px -5px 5px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;


export const Image = styled.img `
width: 100%;
position: relative;
border-radius: 0%;
margin-right: -100px;
max-height:400px;
max-width: 500px;
object-fit: cover;
object-position: center;
border: 2px solid${({theme}) => theme.primary};
@media (max-width: 768px) {
    margin-right: 0px;
    max-width: 400px;
    max-height: 500px;
}
@media (max-width: 640) {
    margin-right: 0px;
    max-width: 280px;
    max-height: 280px;
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
