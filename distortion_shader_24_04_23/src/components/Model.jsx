import { useControls } from "leva";
import React, { useRef } from "react";
import { fragment, vertex } from "./shader";
import { useFrame, useThree } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import { transform } from "framer-motion";
import * as THREE from "three";

function Model({ scrollProgress }) {
  const plane = useRef();
  const texture = useTexture("/images/car.jpg");

  const { width, height } = texture.image;
  const scale = useAspect(width, height, 0.3);

  const { viewport } = useThree();

  const { amplitude, waveLength } = useControls({
    amplitude: { value: 0.25, min: 0, max: 2, step: 0.05 },
    waveLength: { value: 5, min: 0, max: 20, step: 1 },
  });

  const uniforms = useRef({
    vUvScale: { value: new THREE.Vector2(0, 0) },
    uTexture: { value: texture },
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  });

  useFrame(() => {
    const scaleX = transform(
      scrollProgress.get(),
      [0, 1],
      [scale[0], viewport.width]
    );
    const scaleY = transform(
      scrollProgress.get(),
      [0, 1],
      [scale[1], viewport.height]
    );
    plane.current.scale.x = scaleX;
    plane.current.scale.y = scaleY;

    const scaleRatio = scaleX / scaleY;
    const aspectRatio = width / height;
    plane.current.material.uniforms.vUvScale.value.set(
      1,
      aspectRatio / scaleRatio
    );

    const modifiedAmplitude = transform(
      scrollProgress.get(),
      [0, 1],
      [amplitude, 0]
    );

    plane.current.material.uniforms.uTime.value += 0.04;
    plane.current.material.uniforms.uAmplitude.value = modifiedAmplitude;
    plane.current.material.uniforms.uWaveLength.value = waveLength;
  });

  return (
    <mesh ref={plane} scale={scale}>
      <planeGeometry args={[1, 1, 45, 45]} />
      {/* <meshBasicMaterial color={"red"} wireframe={true} /> */}
      <shaderMaterial
        wireframe={false}
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}

export default Model;
