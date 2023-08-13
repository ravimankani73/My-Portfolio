import styled from "styled-components";
import  Skills  from "./components/Skills";
import IntroSection from "./components/IntroSection";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
// import Pract from "./components/Pract";

import {
  Box,
  useColorModeValue, 
} from '@chakra-ui/react';
import { useRef } from "react";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img//bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
`;

function App() {

  const ref = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSkills = () => {
    ref.current?.scrollIntoView({behavior : 'smooth'})
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior : 'smooth'})
  };

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({behavior : 'smooth'})
  };

  return (
    <Box bg={useColorModeValue('gray.300', 'gray.800')}>

    <Container>
      <Nav OnSkillsClick={scrollToSkills} onContactClick={scrollToContact} />
      <IntroSection/>
      <Skills ref={ref} /> 
     <Contact ref={contactRef} />
    </Container>
    </Box>
  );
}

export default App;
