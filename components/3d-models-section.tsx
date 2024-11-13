"use client"

import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Card } from '@/components/ui/card'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

export function ThreeDModelsSection() {
  const [activeModel, setActiveModel] = useState('/models/salt_pepper.glb')
  
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">3D Models</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-4">
            <div className="aspect-square w-full">
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Model url={activeModel} />
                <OrbitControls />
              </Canvas>
            </div>
          </Card>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Model Gallery</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Salt & Pepper', url: '/models/salt_pepper.glb' },
                { name: 'Ring 1', url: '/models/ring_1.glb' },
                { name: 'Ring 3', url: '/models/ring_3.glb' },
                { name: 'Ring 4', url: '/models/ring_4.glb' },
                { name: 'Cufflink', url: '/models/cufflik.glb' },
                { name: 'Spaa', url: '/models/spaa.glb' },
              ].map((model) => (
                <button
                  key={model.url}
                  onClick={() => setActiveModel(model.url)}
                  className={`p-4 text-left rounded-lg transition-colors ${
                    activeModel === model.url ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}