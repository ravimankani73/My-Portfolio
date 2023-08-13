import React, {useRef,useState} from 'react'
import styled from "styled-components";
import { FaArrowUp } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';
//import emailjs from '@emailjs/browser';

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 768px) {
  height: 200vh;
}
`;

const Container = styled.div`
  
  width : 100%;
  height: 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
  gap : 50px;

`;


const Form = styled.form`
  width : 500px;
  display : flex;
  flex-direction : column;
  gap : 20px;

  @media only screen and (max-width : 768px){
    padding-left : 5px;
    width  : 90%;
  }
`;

const Title = styled.h1`
  font-weight : 200;
  
`;
const Input = styled.input`
  padding : 10px;
  background-color : #e8e6e6;
  border : none;
  border-radius : 5px;
`;

const TextArea = styled.textarea`
  padding : 10px;
  height  : 20vh;
  background-color : #e8e6e6;
  border : none;
  border-radius : 5px;
`;

const Button = styled.button`
  border : none;
  border-radius : 5px;
  padding: 10px;
  font-weight : bold;
  background-color : #da4ea2;
  color:  whitesmoke;
  cursor : pointer;
`;



const Contact = React.forwardRef((props, ref) =>{
  const[sucess, setSucess]  = useState(null);

// const handleSubmit = (e)=>{
//   console.log("hello from handle submit");
//   e.preventDefault()

//   emailjs.sendForm('service_x8hzhh9', 'template_7rejpa9', ref.current, 'R1a1c3_gUNukMpJWd')
//       .then((result) => {
//           console.log(result.text);
//           setSucess(true);
//       }, (error) => {
//           setSucess(false);
//           console.log("Error is = "+error.text);
//   });
// }

const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};

  return (
    <Section ref={ref} >
        <Container>
             <Form  >
              <Title>Contact Me</Title>
              <Input type="text" name="name" placeholder='Name' />
              <Input type="email" name="email" placeholder='Email' />
              <TextArea name="message" placeholder='Write your message' />
              <Button  type='submit'>Send</Button>
              {sucess && "Your Message has been sent to me"  }
            </Form>
        </Container>
        <IconButton
        icon={<FaArrowUp />}
        aria-label="Scroll to top"
        size="lg"
        position="fixed"
        bottom="2rem"
        right="2rem"
        onClick={scrollToTop}
    />
    </Section>
  )
});

export default Contact
