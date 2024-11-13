"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  { id: 1, title: "Salt og Pepar", description: "Geometriske studiar av form og funksjon" },
  { id: 2, title: "Parametrisk Arkitektur", description: "Utforsking av komplekse strukturar" },
  { id: 3, title: "Digital Skulptur", description: "3D-modellering av abstrakte former" },
]

export default function PDPortfolio() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Parametrisk Design Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}