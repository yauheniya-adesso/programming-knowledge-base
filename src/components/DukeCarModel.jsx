import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";

const DukeCarModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(3, 1, 5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lights (much brighter)
    const light = new THREE.DirectionalLight(0xffffff, 7.0);
    light.position.set(5, 10, 7);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(hemi);

    // Controls (horizontal only)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Lock vertical rotation
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 4;

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load("models/DukeCar.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.5, 0.5, 0.5);
      model.position.set(0, 0, 0);
      scene.add(model);

      const animate = () => {
        requestAnimationFrame(animate);

        // Slow rotation
        model.rotation.y += 0.002;

        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    });

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "400px", marginTop: "40px" }}
    />
  );
};

export default DukeCarModel;
