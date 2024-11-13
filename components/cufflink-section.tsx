"use client"
import React from 'react'
import MermaidDiagram from './mermaid-diagram'

const cufflinkDiagram = `
graph TD
    A[Input Parameters] --> B[Cufflink Generator]
    B --> C[Output: Cufflink Design]
    
    subgraph Parameters
    D[Height]
    E[Segments]
    F[Radius]
    G[Pattern]
    end
    
    D --> A
    E --> A
    F --> A
    G --> A
`

export default function CufflinkSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Parametrisk Mansjettknapp Design</h2>
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <MermaidDiagram chart={cufflinkDiagram} />
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="mb-6">
            Vår tilnærming til parametrisk design av mansjettknapper kombinerer tradisjonelt handverk med moderne digital teknologi. 
            Gjennom å kontrollere nøkkelparametrar som høgde, segment, radius og mønster, kan vi generere unike og elegante design 
            som balanserer estetikk med funksjonalitet.
          </p>
          <h3 className="text-xl font-semibold mb-4">Nøkkelparametrar</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Høgde: Definerer tjukkleiken og det vertikale profilet</li>
            <li>Segment: Kontrollerer kompleksiteten og detaljnivået i designet</li>
            <li>Radius: Bestemmer den overordna storleiken og forma</li>
            <li>Mønster: Styrer det visuelle uttrykket og overflatestrukturen</li>
          </ul>
        </div>
      </div>
    </section>
  )
}