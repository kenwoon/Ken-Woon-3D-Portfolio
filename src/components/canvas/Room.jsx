import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, OrthographicCamera, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Room = () => {
  const room = useGLTF('./scene.glb');

  return (
    <Float>
      <mesh
        scale={0.5}
      >
        <primitive
          object={room.scene}
          position-y={-1.5}
          rotation={[Math.PI / 5, -Math.PI / 4.5, Math.PI / 256]}
        />
      </mesh>
    </Float>
  );
};

const RoomCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   // Add a listener for changes to the screen size
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");

  //   // Set the initial value of the `isMobile` state variable
  //   setIsMobile(mediaQuery.matches);

  //   // Define a callback function to handle changes to the media query
  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };

  //   // Add the callback function as a listener for changes to the media query
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   // Remove the listener when the component is unmounted
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
      <Canvas
        shadows
        framloop="demand"
        gl={{ preserveDrawingBuffer: true}}
        // orthographic
        // camera= {{
        //   fov: 45,
        //   near: 0.1,
        //   far: 200,
        //   position: [-4, 3, 6]
        // }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />
          <OrthographicCamera
            makeDefault
            zoom={100}
            // top={200}
            // bottom={-200}
            // left={200}
            // right={-200}
            near={0.1}
            far={2000}
            position={[0, 0, 200]}
          />
          <Environment preset="city" />
          <Room />
        </Suspense>
        
        <Preload all />
      </Canvas>
  );
};

export default RoomCanvas;