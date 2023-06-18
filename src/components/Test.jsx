import React from "react"
import styled from "styled-components"
import Cube from "./Cube"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

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

const Test = () => {

    return(
        <Section>
            <Container>
                <Canvas>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3,2,1]} />
                    <Cube />
                </Canvas>
            </Container>
        </Section>
    )
}

export default Test