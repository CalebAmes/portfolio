import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const Box = (props) => {
  const mesh = useRef();

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
      scale={ [3, 3, 3] }
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

const Dice = ({ positionArray = [0, 0, 0] }) => {
  return (
    <Canvas>
      <ambientLight intensity={0} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={positionArray} />
    </Canvas>
  );
};

export default Dice;
