import React from "react";
import styled from "styled-components"
import Map from "./Map"

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
  width: 100%;
  min-width: 1400px;
  margin: 0 auto;
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
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
  display: flex;
  justify-content: center;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h2``

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  justify-content: center;
`

const Input = styled.input`
  height: 20px;
  padding: 12px;
  margin-bottom: 10px;
`
const TextArea = styled.textarea`
  padding: 12px;
`
const Button = styled.a`
  margin-top:20px;
`


const Contact = () => {
    return(
        <Section id="contact">
            <Container>
              <Left>
                
                <Map />
              </Left>
              <Right>
                <Form>
                  <Title>Get In Touch</Title>
                  <Input placeholder="Name"/>
                  <Input placeholder="Email Address"/>
                  <TextArea placeholder="Your Message" rows={5}/>
                  <Button className="btn">Submit</Button>
                </Form>
              </Right>
            </Container>
        </Section>
    )
}

export default Contact