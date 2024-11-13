"use client"

import React, { useState, Suspense } from 'react'
import Image from 'next/image'
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment } from "@react-three/drei"
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

const spomenikStudies = [
  { id: 1, title: "Arkitektonisk Portal", image: "/images/spom_1.png" },
  { id: 2, title: "Diagonale Studiar", image: "/images/spom_2.png" },
  { id: 3, title: "Bølgjande Volum", image: "/images/spom_3.png" },
  { id: 4, title: "Spomenik Abstraksjon", image: "/images/spom_4.png" }
]

export default function SpomenikSection() {
  const [currentSpomenik, setCurrentSpomenik] = useState(0)
  const [showModel, setShowModel] = useState(false)

  const nextSpomenik = () => {
    setCurrentSpomenik((prev) => (prev + 1) % spomenikStudies.length)
  }

  const prevSpomenik = () => {
    setCurrentSpomenik((prev) => (prev - 1 + spomenikStudies.length) % spomenikStudies.length)
  }

  const toggleModel = () => {
    setShowModel(!showModel)
  }

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 border-b border-white pb-2">Spomenik-inspirasjon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="prose prose-invert max-w-none">
          <p className="mb-4">
            Ei viktig kjelde til inspirasjon for dette prosjektet har vore dei jugoslaviske minnesmerkene kjende som spomeniks. Desse monumentale skulpturane, bygde mellom 1960- og 1990-talet, representerer ei unik blanding av abstrakt form og symbolsk tyding.
          </p>
          <p>
            Spomenikane sin bruk av geometriske former og deira evne til å skape sterke visuelle uttrykk gjennom abstraksjon har vore særleg interessant for utviklinga av mine eigne geometriske studiar. Deira tilnærming til form og rom har påverka korleis eg tenkjer om samspelet mellom ulike geometriske element.
          </p>
        </div>
        <div className="relative aspect-[3/4] w-full">
          {showModel ? (
            <Canvas camera={{ position: [0, 0, 2] }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
              <Suspense fallback={null}>
                <Model url="/models/spomenik_inspired.glb" />
                <Environment preset="studio" />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          ) : (
            <Image
              src={spomenikStudies[currentSpomenik].image}
              alt={spomenikStudies[currentSpomenik].title}
              fill
              className="object-cover"
            />
          )}
          <button
            onClick={prevSpomenik}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSpomenik}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={toggleModel}
            className="absolute bottom-2 right-2 bg-black bg-opacity-50 p-2 rounded-full"
            aria-label="Toggle 3D model"
          >
            {showModel ? '2D' : '3D'}
          </button>
        </div>
      </div>
    </section>
  )
}