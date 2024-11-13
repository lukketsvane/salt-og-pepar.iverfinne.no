"use client"
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const images = [
  { id: 1, title: "Dodecahedron Ellipsoid", image: "/images/dodecahedron_ellipsoid_2024-11-13 1.png" },
  { id: 2, title: "Dodecahedron Box", image: "/images/dodecahedron_box_2024-11-13 1.png" },
  { id: 3, title: "Prism Box", image: "/images/prism_box_2024-11-13.png" },
  { id: 4, title: "Icosahedron Cylinder", image: "/images/icosahedron_cylinder_2024-11-13 (1).png" },
  { id: 5, title: "Octahedron Cylinder", image: "/images/octahedron_cylinder_2024-11-13 1.png" },
  { id: 6, title: "Icosahedron Torus", image: "/images/icosahedron_torus_2024-11-13 1.png" },
  { id: 7, title: "Dodecahedron Cone", image: "/images/dodecahedron_cone_2024-11-13.png" },
  { id: 8, title: "Prism Cone", image: "/images/prism_cone_2024-11-13 1.png" },
  { id: 9, title: "Icosahedron Cylinder", image: "/images/icosahedron_cylinder_2024-11-13 1.png" },
  { id: 10, title: "Dodecahedron Octahedron", image: "/images/dodecahedron_octahedron_2024-11-13.png" },
  { id: 11, title: "Prism Study 1", image: "/images/box_prism_2024-11-13.png" },
  { id: 12, title: "Prism Study 2", image: "/images/cylinder_prism_2024-11-13 (1) 1.png" },
  { id: 13, title: "Octahedron Study", image: "/images/octahedron_cylinder_2024-11-13 1.png" },
  { id: 14, title: "Icosahedron Study 1", image: "/images/icosahedron_cylinder_2024-11-13 1.png" },
  { id: 15, title: "Tetrahedron Study", image: "/images/tetrahedron_cylinder_2024-11-13.png" },
  { id: 16, title: "Pyramid Study 1", image: "/images/pyramid_dodecahedron_2024-11-13 1.png" },
  { id: 17, title: "Torus Study", image: "/images/torus_sphere_2024-11-13 1.png" },
  { id: 18, title: "Pyramid Study 2", image: "/images/pyramid_cylinder_2024-11-13 1.png" },
  { id: 19, title: "Icosahedron Study 2", image: "/images/icosahedron_cylinder_2024-11-13 (1).png" }
]

export default function TwoDRendersSection() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 border-b border-white pb-2">2D Renders</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="bg-black border border-white overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold text-center">{image.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}