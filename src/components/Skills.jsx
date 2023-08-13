import React from 'react';
import styled from "styled-components";
import { FaJava, FaJsSquare, FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { MdOutlineHtml } from "react-icons/md";
import { Box, useColorModeValue, Card } from '@chakra-ui/react';

const skillData = [
  { skill: "Core Java", icon: <FaJava /> },
  { skill: "Html", icon: <MdOutlineHtml /> },
  { skill: "Css", icon: <DiCss3 /> },
  { skill: "Javascript", icon: <FaJsSquare /> },
  { skill: "React Js", icon: <FaReact /> },
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center; 
  width: 1400px; 
`;
const Container = styled.div`
  scroll-snap-align: center;
  width : 100%;
  height : 80px;
  display : flex;
  gap : 100px;
  padding : 10px;
`;
const Title = styled.h1`
  font-size  : 40px;
  text-align : center;
  padding-bottom : 100px;
`;

const CardHeader = styled.div`
  display : flex;
  gap : 10px

  &:hover {
    background-color: #2980b9;
  }
`;

const H1 = styled.h1`
  font-size : 30px;
`;

const Skills = React.forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Box color={useColorModeValue('black', 'white')}>
        <Title>Skills</Title>
      </Box>
      <Container>
        {skillData.map((value) => (
          <Card
            key={value.skill}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            style={{
              "width": "230px",
              "justifyContent": "center",
              "padding": "10px",
              "cursor": "pointer",
              "transition": "transform 0.2s ease"
            }}
            _hover={{
              transform: 'scale(1.1)'
            }}
          >
            <CardHeader>
              <H1>
                {value.icon}
              </H1>
              <H1>
                {value.skill}
              </H1>
            </CardHeader>
          </Card>
        ))}
      </Container>
    </Section>
  );
});

export default Skills;
