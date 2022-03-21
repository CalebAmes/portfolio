import { useEffect, useState } from "react";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

const ThreeJs = () => {
  // const [load, setLoad] = useState(0);

  useEffect(() => {
    // let interval = setInterval(() => {
    //   console.log("interval ran");
    //   setLoad(() => load + 1);
    // }, 1000);
    animate();
    // return () => clearInterval(interval);
  }, []);

  return (
    <div>
      ThreeJs
      <h1>This is a test!</h1>
    </div>
  );
};

export default ThreeJs;
