"use client"

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Three.js components with ssr disabled
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false })
const OrbitControls = dynamic(() => import('@react-three/drei').then(mod => mod.OrbitControls), { ssr: false })
const Environment = dynamic(() => import('@react-three/drei').then(mod => mod.Environment), { ssr: false })

function Model({ url }: { url: string }) {
  return (
    <Suspense fallback={<mesh><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="red" /></mesh>}>
    </Suspense>
  )
}

const models = [
  { id: 1, title: "Ring 3", model: "/models/ring_3.glb" },
  { id: 2, title: "Salt & Pepper", model: "/models/salt_pepper.glb" },
  { id: 3, title: "Ring 1", model: "/models/ring_1.glb" },
  { id: 4, title: "Ring 4", model: "/models/ring_4.glb" }
]

export default function ThreeDModelsSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">3D-modellar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {models.map((model) => (
          <div key={model.id} className="aspect-square bg-secondary rounded-lg overflow-hidden relative">
            <div className="absolute inset-0">
              <Canvas camera={{ position: [0, 0, 1.5] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <Suspense fallback={null}>
                  <Model url={model.model} />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
              <h3 className="text-sm font-medium text-center text-white">{model.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}