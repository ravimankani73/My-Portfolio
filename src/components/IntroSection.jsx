import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {
    Box,
    useColorModeValue, 
    Button,
  } from '@chakra-ui/react';
import { IoArrowDownOutline } from "react-icons/io5";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    padding: 0 55px
    text-align : center;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding : 5px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size  : 79px
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #e06f04;
  font-size  : 24px;
  font-weight : bold;
`;

const Desc = styled.p`
  font-size: 18px;
  color: useColorModeValue('gray.200', 'gray.700');
  background-color : useColorModeValue('red.500', 'red.200')
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./Ravi.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 45%;
    width: 400px;
    height: 550px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

    @keyframes animate {
        to {
        transform: translateY(20px);
        }
    }
`;

const Innertext = styled.div`
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, 220%);
color: white;
`;

const IntroSection = () => {
  return (
    
    <Section>
      <Container>
        <Left>
          <Box color={useColorModeValue('black', 'white')}>
            <Title >Here. To. Learn.</Title>
          </Box>
          <WhatWeDo>
            <Line src="../line.png" />
            <Subtitle>Looking for a job</Subtitle>
          </WhatWeDo>
          <Box color={useColorModeValue('black', 'white')}>
          <Desc>
          Seeking a challenging position in a reputable organization to expand and utilize my learning, skills and knowledge.
          </Desc>
          </Box>
         <a href="./MyResume.pdf" download>
         <Button leftIcon={<IoArrowDownOutline />} colorScheme='orange' variant='outline'>
            My Resume
        </Button>
        </a>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img >
            <Innertext>
            <h1 style={{
                "font-size":"32px",
            }}>
                Hey, It's Ravi
            </h1>
            <p style={{
                "font-size":"13px",
            }}>I am a React Js developer</p>
            </Innertext>
          </Img>
        </Right>
      </Container>
    </Section>

  );
};

export default IntroSection;
