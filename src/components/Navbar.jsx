import React from "react"
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 9;
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(8.4px);
        -webkit-backdrop-filter: blur(8.4px);
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content:space-between;
  padding: 10px 0px;
  
  @media (max-width: 1440px) {
    padding:40px;
  }
  @media (max-width: 992px) {
    padding:20px;
  }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    @media (max-width: 992px) {
        display:none;
    }
`
const List = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
    padding-left: 0;
`
const ListItem = styled.li``
const Link = styled.a`
    font-size: 14px;
    text-decoration: none !important;
`
const Button = styled.a``

const Navbar = () => {
    return(
        <Section id="navbar">
            <Container>
                <Links className="nav">
                    <List>
                        <ListItem>
                            <Link href="#hero">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#about">About</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#works">Works</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#contact">Contact</Link>
                        </ListItem>
                    </List>
                </Links>
                <Button className="btn">Download Resume</Button>
            </Container>
        </Section>
    )
}

export default Navbar