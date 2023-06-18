import React from "react";
import styled from "styled-components"

const data = [
  "Web Design",
  "Development",
  "Graphic Design",
  "SEO"
];

const Section = styled.div`
  min-height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: 992px) {
    min-height: initial;
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
  justify-content: space-between;
  gap: 100px;
  @media (max-width: 1440px) {
    padding:40px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    align: center;
    padding:100px 20px;
    gap: 40px;
    justify-content: center;
    height: initial;
  }
`
const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const ListItem = styled.li`
  font-size: 4.5rem;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    color: #ffffff;
    width: 0px;
    white-space: nowrap;
  }
  &:hover {
    &:after {
      animation: hoverText .5s linear both;

      @keyframes hoverText {
        to {
          width: 100%;
        } 
      }
    }
  }
  @media (max-width: 992px){
    font-size: 2.5rem;
  }
`
const Right = styled.div`
  flex: 1;
`


const Works = () => {
    return(
        <Section id="works">
            <Container>
              <Left>
                <List>
                  {data.map(item=>(
                    <ListItem key={item} text={item}>{item}</ListItem>
                  ))}
                </List>
              </Left>
              <Right>
                
              </Right>
            </Container>
        </Section>
    )
}

export default Works