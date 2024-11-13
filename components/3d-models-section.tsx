"use client"

import React, { Suspense, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}


const models = [
    { id: 1, title: "Dodecahedron Box", model: "/models/ring_4.glb" },
    { id: 2, title: "Ring 1", model: "/models/ring_1.glb" },
    { id: 3, title: "Ring 3", model: "/models/ring_3.glb" },
    { id: 4, title: "Salt & Pepper", model: "/models/salt_pepper.glb" },
    { id: 5, title: "Dodecahedron Box", model: "/models/spaa.glb" },
    { id: 6, title: "Dodecahedron Box", model: "/models/cuffik.glb" },
]

export default function ThreeDModelsSection() {
  const [activeModel, setActiveModel] = useState(null)

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 border-b border-white pb-2">3D-modellar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map((model) => (
          <Dialog key={model.id}>
            <DialogTrigger asChild>
              <Card className="bg-black border border-white overflow-hidden aspect-square cursor-pointer">
                <CardContent className="p-0 h-full">
                  <Canvas camera={{ position: [0, 0, 1.67] }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <Suspense fallback={null}>
                      <Model url={model.model} />
                      <Environment preset="studio" />
                    </Suspense>
                    <OrbitControls autoRotate />
                  </Canvas>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50">
                    <h3 className="text-sm font-semibold text-center text-white">{model.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] h-[600px] bg-black">
              <Canvas camera={{ position: [0, 0, 2] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <Suspense fallback={null}>
                  <Model url={model.model} />
                  <Environment preset="studio" />
                </Suspense>
                <OrbitControls />
              </Canvas>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  )
}