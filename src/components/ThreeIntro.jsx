import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { InteractionManager } from 'three.interactive';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeIntro = () => {
  const refContainer = useRef(null);
  const violin2Ref = useRef(null); // Add a ref to store the violin2 model

  useEffect(() => {
    const scene = new THREE.Scene();
    const fov = 50;
    const aspectRatio = window.innerWidth / window.innerHeight;
    const nearClip = 0.4;
    const farClip = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearClip, farClip);
    camera.position.set(0, 2, 4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.shadowMap.enabled = true;

    const loader = new GLTFLoader();
    const controls = new OrbitControls(camera, renderer.domElement);
    const interactionManager = new InteractionManager(renderer, camera, renderer.domElement);

    renderer.setSize(window.innerWidth, window.innerHeight);
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    const size = 20;
    const divisions = 20;
    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 15);
    spotLight.position.set(0, 2, 0);
    spotLight.angle = 15;
    spotLight.penumbra = 100;
    spotLight.decay = 2;
    spotLight.distance = 100;
    spotLight.castShadow = true;
    scene.add(spotLight);

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 1;
    spotLight.shadow.camera.far = 5;

    const geometryFloor = new THREE.PlaneGeometry(5, 5);
    const materialFloor = new THREE.MeshPhongMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
    const floor = new THREE.Mesh(geometryFloor, materialFloor);
    floor.receiveShadow = true;
    floor.rotation.x = Math.PI / 2;
    scene.add(floor);

    loader.load("../../public/violin1.gltf", (gltf) => {
      const model = gltf.scene;
      model.traverse((n) => {
        n.castShadow = true;
        n.receiveShadow = false;
      });
      scene.add(model);
    });

    loader.load("../../public/violin2.gltf", (gltf) => {
      const model = gltf.scene;
      model.traverse((n) => {
        n.castShadow = true;
        n.receiveShadow = false;
      });
      scene.add(model);
      violin2Ref.current = model;

      
      gsap.to(model.position, {
        z: 2, 
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
      document.addEventListener("keydown", function (event) {
        switch (event.code) {
            case "KeyW":
                model.position.z -= 0.1;
                break;
            case "KeyS":
                model.position.z += 0.1;
                break;
            case "KeyA":
                model.position.x -= 0.1;
                break;
            case "KeyD":
                model.position.x += 0.1;
                break;
            default:
                break;
        }
      });

    });
/*
     //const geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
        //const cubeTexture = new THREE.TextureLoader().load("../../public/sand.png");
        //const material = new THREE.MeshPhongMaterial({ map: cubeTexture });



        //const cube = new THREE.Mesh(geometry, material);
        //cube.receiveShadow = true;
        //cube.castShadow = true;
        //scene.add(cube);
       // cube.position.y = 0.25;
        interactionManager.add(cube);
        cube.addEventListener("click", (event) => {
            gsap.to(event.target.scale,{
                duration: 1,
                y: 0.15,
                x: 0.15,
                z: 0.15,
                repeat: 1,
                yoyo: true,
                ease: "bounce.out"
            });
        });
        */

    window.addEventListener("resize", () => onWindowResized(renderer, camera));

    renderer.render(scene, camera);
    renderer.setAnimationLoop((time) => animation(time, { camera, scene, renderer }));
  }, []);

  function animation(time, obj) {
    obj.renderer.render(obj.scene, obj.camera);
  }

  function onWindowResized(renderer, camera) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  return (
    <section ref={refContainer} />
  );
};

export default ThreeIntro;

 