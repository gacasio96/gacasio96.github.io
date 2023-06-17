import React from "react";
import styled from "styled-components"

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`
const Title = styled.h2``
const Desc = styled.p``
const Img = styled.img`
  box-shadow: 0px 0px 20px rgba(0,0,0,.7);
  width: 100%;

  @media (max-width: 992px) {
    width:60%;
  }
  
`
const Button = styled.button`
  margin-top:20px;
`


const About = () => {
    return(
        <Section id="about">
            <Container>
              <Left>
                <Img src=""/> 
              </Left>
              <Right>
                <Title>Heading</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in fermentum dui. In posuere metus vel ligula laoreet scelerisque.</Desc>
                <Button>See my works</Button>
                               
              </Right>
            </Container>
        </Section>
    )
}

export default About