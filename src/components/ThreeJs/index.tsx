import { useEffect } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
const material = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  wireframe: false,
});
const cube = new THREE.Mesh(geometry, material);

const pointLight = new THREE.PointLight(0xffffff);
const ambientLight = new THREE.AmbientLight(0xffffff);

// helpers for creating a scene
const pointLightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(10, 10);

pointLight.position.set(2, 2, 2);
scene.add(cube, pointLight, pointLightHelper, gridHelper);

camera.position.z = 5;

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  controls.update();
}

const ThreeJs = () => {
  useEffect(() => {
    animate();
  }, []);

  return (
    <div>
      ThreeJs
      <h1>This is a test!</h1>
    </div>
  );
};

export default ThreeJs;
