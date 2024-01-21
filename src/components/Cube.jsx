import React, { useRef } from "react"
import {
    PerspectiveCamera, 
    RenderTexture, 
    Image } from "@react-three/drei"

const Cube = () => {
    
    const ref = useRef()

    return(
        <mesh>
            <boxGeometry args={[2.5,2.5,2.5]}/>
            <meshStandardMaterial color="#DFCDBD">
                <RenderTexture attach="map">
                    <PerspectiveCamera 
                    makeDefault
                    position={[0,0,1]}
                    />
                    <color attach="background" args={["red"]}/>
                    <Image ref={ref} url="./img/G - Avatar.png"/>

                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube