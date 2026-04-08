import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ColladaLoader } from "three-stdlib";

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
    camera.position.set(3, 2, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Load model (.dae or .jas)
    const loader = new ColladaLoader();
    loader.load("models/DukeCar.dae", (collada) => {
      const model = collada.scene;
      model.scale.set(0.5, 0.5, 0.5);
      scene.add(model);

      const animate = () => {
        requestAnimationFrame(animate);
        model.rotation.y += 0.01;
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
