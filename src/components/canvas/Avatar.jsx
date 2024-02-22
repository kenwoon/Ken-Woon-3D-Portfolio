import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Preload, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

import CanvasLoader from "../Loader";

export function Avatar(props) {
  const { animation } = props;
  // const { headFollow, cursorFollow, wireframe } = useControls({
  //   headFollow: false,
  //   cursorFollow: false,
  //   wireframe: false
  // });
  const group = useRef();
  const { nodes, materials } = useGLTF("./avatar.glb")
  
  // const { animations: fallingAnimation } = useFBX("./animations/falling idle.fbx");
  // const { animations: landingAnimation } = useFBX("./animations/falling to landing.fbx");
  // const { animations: standingAnimation } = useFBX("./animations/standing idle.fbx");
  const { animations: typingAnimation } = useFBX("./animations/typing.fbx");

  // fallingAnimation[0].name = "Falling";
  // landingAnimation[0].name = "Landing";
  // standingAnimation[0].name = "Standing";
  typingAnimation[0].name = "Typing";
  
  const { actions } = useAnimations([typingAnimation[0]], group);
  
  // useFrame((state) => {
  //   if (headFollow) {
  //     group.current.getObjectByName("Head").lookAt(state.camera.position);
  //   }
  //   if (cursorFollow) {
  //     const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
  //     group.current.getObjectByName("Spine2").lookAt(target);
  //   }
  // });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    }
  }, [animation]);

  // useEffect(() => {
  //   Object.values(materials).forEach((material) => {
  //     material.wireframe = wireframe;
  //   });
  // }, [wireframe]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          frustumCulled={false}
        />
      </group>
    </group>
  );
}

// useGLTF.preload("./avatar.glb");

const AvatarCanvas = () => {
  // const { animation } = useControls({
  //     animation: {
  //       value: "Typing",
  //       options: ["Typing", "Falling", "Landing", "Standing"]
  //     }
  //   });

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Environment preset="lobby" />
        <Float>
          <group>
            <mesh
              scale={1.35}
              position={[0, -1, 0]}
            >
              <pointLight intensity={1} position={[0, 1.15, 0.65]} />
              <Avatar animation={"Typing"}/>
              {/* {animation === "Typing" && ( */}
              <mesh scale={[0.5, 0.5, 0.5]} position-y={0.21}>
                <boxGeometry />
                <meshStandardMaterial color="#7F7B61" />
              </mesh>
              {/* )} */}
            </mesh>
          </group>
        </Float>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default AvatarCanvas;