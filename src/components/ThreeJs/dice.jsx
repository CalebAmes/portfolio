import { useRef, useState, useMemo} from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from "three";

const Box = (props) => {
  const mesh = useRef();
  
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

 const texture = useMemo(
   () => new THREE.TextureLoader().load(process.env.PUBLIC_URL + "/me.jpeg"),
   []
 );

  return (
    <mesh
    {...props}
    ref={mesh}
    scale={active ? [3, 3, 3] : [2, 2, 2]}
    onClick={(e) => setActive(!active)} 
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  )
}


const Dice = () => {
  return (
    <div style={{height: "100vh"}}>Dice
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-2.5, 0, 0]} />
        <Box position={[2.5, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Dice