import React from "react";
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content:space-between;
  padding: 10px 0px;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`
const Logo = styled.img``

const List = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
`
const ListItem = styled.li``
const Link = styled.a``

const Button = styled.button``

const Navbar = () => {
    return(
        <Section id="navbar">
            <Container>
                <Links>
                    <Logo src="#"/>
                    <List>
                        <ListItem>
                            <Link href="#hero">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#about">About</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#works">Work</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="#contact">Contact</Link>
                        </ListItem>
                    </List>
                </Links>
                <Button>Download Resume</Button>
            </Container>
        </Section>
    )
}

export default Navbar