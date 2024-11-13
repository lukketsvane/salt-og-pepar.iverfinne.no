"use client"
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    title: "Definering av parameter",
    description: "Etablering av grunnleggande geometriske variablar som kontrollerer forma.",
    image: "/images/step1_parameters.png"
  },
  {
    title: "Geometrisk kontroll",
    description: "Justering av numeriske verdiar, koordinatar og rotasjonar for å manipulere forma.",
    image: "/images/step2_geometric_control.png"
  },
  {
    title: "Matematiske transformasjonar",
    description: "Bruk av matematiske operasjonar for å endre og kombinere former.",
    image: "/images/step3_transformations.png"
  },
  {
    title: "Kompleks geometri",
    description: "Generering av avanserte strukturar som kurver, overflater og volum.",
    image: "/images/step4_complex_geometry.png"
  },
  {
    title: "Optimalisering",
    description: "Finjustering av forma basert på definerte kriterium og ynskja resultat.",
    image: "/images/step5_optimization.png"
  },
  {
    title: "Iterativ forbetring",
    description: "Kontinuerleg raffinering av designet gjennom gjentakande justeringar og evalueringar.",
    image: "/images/step6_iteration.png"
  }
]

export default function ParametricDesignProcess() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 border-b border-white pb-2">Parametrisk Designprosess</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="bg-black border border-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="text-sm text-gray-300">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}