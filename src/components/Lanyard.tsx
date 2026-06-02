/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

import './Lanyard.css';

const cardGLB = '/glb/card-BP4TWJmK.glb';
const lanyard = '/React.png';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState<boolean>(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = (): void => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }: BandProps) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: 'dynamic' as RigidBodyProps['type'],
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyard);
  const baseTexture = useTexture('/Mithun.png');

  const [cardTexture, setCardTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    if (baseTexture) {
      baseTexture.flipY = false;
      baseTexture.wrapS = THREE.ClampToEdgeWrapping;
      baseTexture.wrapT = THREE.ClampToEdgeWrapping;
      baseTexture.repeat.set(1.0, 1.0);
      baseTexture.offset.set(0.22, 0.0);
      baseTexture.needsUpdate = true;
    }
  }, [baseTexture]);

  useEffect(() => {
    const img = new Image();
    img.src = '/Mithun.png';
    img.onload = () => {
      console.log("Canvas Image loaded successfully!");
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw base image
        ctx.drawImage(img, 0, 0);

        // Define card horizontal and vertical boundaries based on UV coordinate mapping
        const leftBoundary = img.width * 0.22;
        const rightBoundary = img.width * 0.715;
        
        // Vertical coordinate mapping the text further down to the absolute bottom area of the card
        const textCenterY = img.height * 0.70; 

        // Draw Typography
        const fontSize = Math.round(img.width * 0.021);
        ctx.font = `800 ${fontSize}px "Inter", "Plus Jakarta Sans", "Segoe UI", sans-serif`;
        ctx.textBaseline = 'middle';

        // Create the identical premium saffron-to-gold linear gradient matching <GradientText />
        const textGrad = ctx.createLinearGradient(leftBoundary, 0, rightBoundary, 0);
        textGrad.addColorStop(0, '#f46c38');
        textGrad.addColorStop(0.25, '#ffb347');
        textGrad.addColorStop(0.5, '#f46c38');
        textGrad.addColorStop(0.75, '#ffb347');
        textGrad.addColorStop(1, '#f46c38');

        // Draw the background container capsule for contrast and readability
        const containerHeight = fontSize * 2.2;
        const containerY = textCenterY - (containerHeight / 2);
        const containerWidth = rightBoundary - leftBoundary;
        const paddingX = img.width * 0.015;

        ctx.fillStyle = 'rgba(12, 12, 14, 0.88)'; // Premium rich dark backplate
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)'; // Delicate glass border
        ctx.lineWidth = Math.max(1, img.width * 0.0015);
        
        ctx.beginPath();
        if (typeof (ctx as any).roundRect === 'function') {
          (ctx as any).roundRect(leftBoundary + paddingX, containerY, containerWidth - (paddingX * 2), containerHeight, Math.round(fontSize * 0.5));
        } else {
          ctx.rect(leftBoundary + paddingX, containerY, containerWidth - (paddingX * 2), containerHeight);
        }
        ctx.fill();
        ctx.stroke();

        // Left side text: @ SOFTWARE ENGINEER
        const leftTextX = leftBoundary + paddingX + (img.width * 0.018);
        ctx.fillStyle = '#f46c38'; // Keeps the @ symbol in orange as requested
        ctx.fillText('@', leftTextX, textCenterY);
        const atWidth = ctx.measureText('@').width;
        ctx.fillStyle = textGrad; // Shifting gradient color for the words
        ctx.fillText('SOFTWARE ENGINEER', leftTextX + atWidth + 4, textCenterY);

        // Right side text: @ MITHUN_P
        const rightTextSymbol = '@';
        const rightTextName = 'MITHUN_P';
        const nameWidth = ctx.measureText(rightTextName).width;
        const rightAtWidth = ctx.measureText(rightTextSymbol).width;
        const rightTextX = (rightBoundary - paddingX - (img.width * 0.018)) - nameWidth - rightAtWidth - 4;

        ctx.fillStyle = '#f46c38'; // Keeps the @ symbol in orange as requested
        ctx.fillText(rightTextSymbol, rightTextX, textCenterY);
        ctx.fillStyle = textGrad; // Shifting gradient color for the words
        ctx.fillText(rightTextName, rightTextX + rightAtWidth + 4, textCenterY);

        const tex = new THREE.CanvasTexture(canvas);
        tex.flipY = false;
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.repeat.set(1.0, 1.0);
        tex.offset.set(0.22, 0.0);
        tex.needsUpdate = true;
        
        console.log("Setting cardTexture successfully!");
        setCardTexture(tex);
      }
    };
    img.onerror = (err) => {
      console.error("Failed to load Mithun.png in Canvas texture loader:", err);
    };
  }, []);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.78]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.78]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.78]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z
      });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type={'fixed' as RigidBodyProps['type']} />
        <RigidBody position={[0.35, 0, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.7, 0, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.05, 0, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.4, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
        >
          <CuboidCollider args={[1.16, 1.52, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            <mesh geometry={nodes.card.geometry} scale={[1.45, 1.35, 1]} position={[0, -0.39, 0]}>
              <meshPhysicalMaterial
                map={cardTexture || baseTexture}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>

            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(cardGLB);
