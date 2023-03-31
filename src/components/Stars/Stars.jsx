import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import "./Stars.css";

export default function Stars() {
  return (
    <div className="stars-container">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <StarsBackGround />
      </Canvas>
    </div>
  );
}

function StarsBackGround(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(9000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 190;
    ref.current.rotation.y -= delta / 80;
  });

  return (
    <group rotation={[0, 0, Math.PI / 7]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
