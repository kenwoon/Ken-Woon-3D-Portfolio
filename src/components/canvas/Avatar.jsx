import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Preload, Sky, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Avatar = ({ isMobile, animation }) => {
  const group = useRef();

  const avatar = useGLTF("./avatar.gltf");
  const { materials } = useGLTF("./avatar.gltf");
  
  const { animations: fallingAnimation } = useFBX("./animations/falling idle.fbx");
  const { animations: landingAnimation } = useFBX("./animations/falling to landing.fbx");
  const { animations: standingAnimation } = useFBX("./animations/standing idle.fbx");
  const { animations: typingAnimation } = useFBX("./animations/typing.fbx");

  fallingAnimation[0].name = "Falling";
  landingAnimation[0].name = "Landing";
  standingAnimation[0].name = "Standing";
  typingAnimation[0].name = "Typing";
  
  const { actions } = useAnimations([fallingAnimation[0], landingAnimation[0], standingAnimation[0], typingAnimation[0]], group);

  // const { headFollow, cursorFollow, wireframe } = useControls({
  //   headFollow: false,
  //   cursorFollow: false,
  //   wireframe: false
  // });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    }
  }, [animation]);

  // useFrame((state) => {
  //   if (headFollow) {
  //     group.current.getObjectByName("Head").lookAt(state.camera.position);
  //   }
  //   if (cursorFollow) {
  //     const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
  //     group.current.getObjectByName("Spine2").lookAt(target);
  //   }
  // });

  // useEffect(() => {
  //   Object.values(materials).forEach((material) => {
  //     material.wireframe = wireframe;
  //   });
  // }, [wireframe]);

  return (
    <Float>
      <mesh
        scale={isMobile ? 1.75 : 1.85}
        position={isMobile ? [0, -1.75, 0] : [0, -2, 0]}
      >
        <pointLight intensity={1} position={[0, 1.15, 0.65]} />
        <primitive
          ref={group}
          object={avatar.scene}
          frustumCulled={false}
        />
        <mesh scale={[0.5, 0.5, 0.5]} position-y={0.21}>
          <boxGeometry />
          <meshStandardMaterial color="#7F7B61" />
        </mesh>
      </mesh>
    </Float>
  );
};

const AvatarCanvas = () => {
  // const { animation } = useControls({
  //     animation: {
  //       value: "Typing",
  //       options: ["Typing", "Falling", "Landing", "Standing"]
  //     }
  //   });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Environment preset="lobby" />
        <Avatar isMobile={isMobile} animation={"Typing"}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;