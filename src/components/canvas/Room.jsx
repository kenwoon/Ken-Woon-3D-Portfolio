import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Room = ({isMobile}) => {
  const room = useGLTF('./scene.glb');

  return (
    <Float>
      <mesh
        scale={isMobile ? 0.5 : 0.6}
      >
        <primitive
          object={room.scene}
          position-y={-1}
          rotation={[Math.PI / 128, -Math.PI / 2.3, Math.PI / 128]}
        />
      </mesh>
    </Float>
  );
};

const RoomCanvas = () => {
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
      shadows
      framLoop="demand"
      gl={{ preserveDrawingBuffer: true}}
      camera= {{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        />
        <Environment preset="city" />
        <Room isMobile={isMobile}/>
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;