"use client";
import React from 'react'
import MermaidDiagram from './mermaid-diagram'

const designProcessDiagram = `
graph TD
    A[Definering av parameter] --> B[Geometrisk kontroll]
    B --> C[Matematiske transformasjonar]
    C --> D[Kompleks geometri]
    D --> E[Optimalisering]
    E --> F[Iterativ forbetring]
    F --> B
`

export default function DesignProcessSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Designprosess</h2>
      <div className="mb-8">
        <MermaidDiagram chart={designProcessDiagram} />
      </div>
      <div className="prose prose-invert max-w-none">
        <h3 className="text-xl font-semibold mb-4">Parametrisk Designprosess</h3>
        <p className="mb-4">
          Vår designprosess nyttar avanserte algoritmiske verktøy for å generere komplekse geometriske former basert på matematiske forhold og parameter. Prosessen omfattar:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Definering av grunnleggande geometriske parameter</li>
          <li>Geometrisk kontroll gjennom numeriske verdiar, koordinatar og rotasjon</li>
          <li>Transformasjon av former gjennom matematiske operasjonar</li>
          <li>Generering av komplekse geometriske strukturar inkludert kurver, overflater og volum</li>
          <li>Optimalisering av form basert på definerte kriterium</li>
          <li>Iterativ forbetring av designet</li>
        </ol>
        <p className="mt-4">
          Dette parametriske designsystemet mogleggjer rask utforsking av ulike formvariasjonar og gjev høve til å skape innovative geometriske løysingar som kan vere utfordrande å oppnå med tradisjonelle designmetodar.
        </p>
      </div>
    </section>
  )
}