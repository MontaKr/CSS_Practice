import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

function Scene({ scrollProgress }) {
  return (
    <Canvas>
      <Model scrollProgress={scrollProgress} />
    </Canvas>
  );
}

export default Scene;
