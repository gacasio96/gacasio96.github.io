import React, {useRef, useState} from "react"
import emailjs from '@emailjs/browser'
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
    padding:20px;
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
  padding: 0px 50px;
  height: 100%;
  width:100%;
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
const Button = styled.button`
  margin-top:20px;
`

const Contact = () => {

  const ref = useRef();
  const [success,setSuccess] = useState(null)

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_x0fp63d', 'template_sc9p0mu', ref.current, 'bBUgEugx9yhj0Yz1s')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
  }

    return(
        <Section id="contact">
            <Container>
              <Left>
                <Map />
              </Left>
              <Right>
                <Form ref={ref} onSubmit={handleSubmit}>
                  <Title>Get In Touch</Title>
                  <Input placeholder="Name" name="name"/>
                  <Input placeholder="Email Address" name="email"/>
                  <TextArea placeholder="Your Message" rows={5} name="message"/>
                  <Button className="btn" type="submit">Submit</Button>
                  <br/>
                  {success && 
                  "Your message has been sent. I'll get back to you soon!"}
                </Form>
              </Right>
            </Container>
        </Section>
    )
}

export default Contact