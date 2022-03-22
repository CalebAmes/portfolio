import { useRef, useState, useMemo } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

// enabling orbit controls
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// This will create a JSX element
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      maxDistance={10}
    />
  );
};

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
    <mesh {...props} ref={mesh} scale={[3, 3, 3]}>
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
      <CameraControls />
      <ambientLight intensity={0} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={positionArray} />
    </Canvas>
  );
};

export default Dice;
