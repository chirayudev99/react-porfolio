import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";





const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);


  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0,0,1]}
          // on={() => console.log("test")}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {

  const ref = useRef(undefined)
  console.log(ref.current,"ref");

  useEffect(() => {
    ref.current?.reset()
  }, [])
  

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      // camera={{position:[20,1,1],fov:15}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls ref={ref} enableZoom={false} 
        // autoRotate 
        // rotateSpeed={1}
        // reset={}
         />
   
        
        <Ball imgUrl={icon} />
  

      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;