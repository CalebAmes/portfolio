import { useEffect, useRef, useState } from "react";
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

// we don't need to set the size and append to the body if we are putting it in a component
// document.body.appendChild(renderer.domElement);

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
scene.add(cube, pointLight, ambientLight, pointLightHelper, gridHelper);

camera.position.z = 5;

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Adding additional items to the page
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xfffffff });
  const star = new THREE.Mesh(geometry, material);
  
  const [x, y, z] = Array(3)
  .fill()
  .map(() => THREE.MathUtils.randFloatSpread(100));
  
  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// adding background to the scene
const spaceTexture = new THREE.TextureLoader().load(
  process.env.PUBLIC_URL + "/me.jpeg"
  );
  scene.background = spaceTexture;
  
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    controls.update();
  }
  
  const ThreeJs = () => {
    const [dimensions, setDimensions] = useState({
      width: 0,
      height: 0,
    })

    const three = useRef(null);
    const resize = () => {
      // setTimeout(() => 
      //   setDimensions({
      //     width: three.current.clientWidth,
      //     height: three.current.clientHeight,
      // }))
        setDimensions({
          width: three.current.clientWidth,
          height: three.current.clientHeight,
      })
    }
    
    useEffect(() => {
      three.current.appendChild(renderer.domElement)
      animate();
      resize();
      
      return () => three.current.removeChild(renderer.domElement)
    }, []);
    
    useEffect(() => {
      window.addEventListener('resize', resize)
      renderer.setSize(dimensions.width, dimensions.height);
    }, [dimensions])
    
    console.dir(dimensions)

    return (
      <div>
      ThreeJs
      <h1>This is a test!</h1>
      <div ref={three} style={{ height: "1000px", width: "100vw" }} className="ThreeJS"></div>
      <button onClick={resize}>Click me!</button>
    </div>
  );
};

export default ThreeJs;
