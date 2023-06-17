import React from "react";
import styled from "styled-components"
import Navbar from "./Navbar"

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px) {
    min-height: 500px;
  }
`
const Container = styled.div`
  width:1400px;
  max-width: 100%;
  margin: 0 auto;
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 100px;
  @media (max-width: 1440px) {
    padding:40px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding:100px 20px;
    gap: 40px;
    justify-content: initial;
  }
`
const Left = styled.div`
  flex: 2;
`
const Right = styled.div`
  flex: 1;
`
const Title = styled.h1``
const Desc = styled.p``
const Img = styled.img`
  animation: float 3s infinite ease alternate;
  border-radius: 100%;
  box-shadow: 0px 0px 20px rgba(0,0,0,.7);
  width: 100%;

  @keyframes float {
    100% {
      transform: translateY(20px);
    }
    0% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 992px) {
    width:60%;
  }
  
`
const Button = styled.button`
  margin-top:20px;
`


const Hero = () => {
    return(
        <Section id="hero">
            <Navbar/>
            <Container>
              <Left>
                <Title>Hi, I'm G!</Title>
                <Desc>I'm a highly skilled WordPress web developer with years of professional experience. My expertise lies in creating dynamic and robust websites by customizing themes, integrating plugins, and optimizing performance. </Desc>
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