import React from "react";
import styled from "styled-components"
import Navbar from "./Navbar"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
`
const Container = styled.div`
  width: 1400px;
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const Left = styled.div``
const Title = styled.h1``
const Desc = styled.p``
const Img = styled.img`
  animation: float 3s infinite ease alternate;
  border-radius: 100%;
  box-shadow: 0px 0px 20px rgba(0,0,0,.7);

  @keyframes float {
    100% {
      transform: translateY(20px);
    }
    0% {
      transform: translateY(0px);
    }
  }
  
`
const Button = styled.button`
  margin-top:20px;
`
const Right = styled.div``

const Hero = () => {
    return(
        <Section id="hero">
            <Navbar/>
            <Container>
              <Left>
                <Title>Heading</Title>
                <Desc>Lorem ipsum dolor sit <a href="">amet,</a> consectetur adipiscing elit.</Desc>
                <Button>Learn More</Button>
              </Left>
              <Right>
                <Img src="./img/G - Avatar.png"/>                
              </Right>
            </Container>
        </Section>
    )
}

export default Hero