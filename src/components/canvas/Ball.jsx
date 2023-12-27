import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {Decal,Float,OrbitControls,Preload,useTexture} from '@react-three/drei'
import CanvasLoader from "../Loader"


const Ball = ({icon}) => {

  const [decal] = useTexture([icon])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
    <ambientLight intensity={0.25} />
    <directionalLight position={[0,0,0.05]} />
    <mesh castShadow receiveShadow scale={2.75} >
<icosahedronGeometry args={[1,1]} />
<meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
<Decal map={decal} rotation={[2 * Math.PI,0,6.25]} position={[0,0,1]} />

    </mesh> 

    </Float>
  )
}

const BallCanvas = ({icon,idx}) => {
  return <Canvas 
  frameloop='demand'
  shadows
  gl={{preserveDrawingBuffer:true}}
   >
<Suspense fallback={<CanvasLoader />} >
<OrbitControls 

enableZoom={false}
autoRotate 
rotateSpeed={idx * 100}
// maxPolarAngle={Math.PI/2}
// minPolarAngle={Math.PI/2}

/>
<Ball icon={icon} />
</Suspense>
<Preload />
  </Canvas>
}

export default BallCanvas