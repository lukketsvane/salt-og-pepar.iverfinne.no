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
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Designprosess</h2>
        <div className="mb-12">
          <MermaidDiagram chart={designProcessDiagram} />
        </div>
        <div className="prose prose-invert max-w-none">
          <h3 className="text-2xl font-semibold mb-4">Parametrisk Designprosess</h3>
          <p className="mb-6">
            Vår designprosess nyttar avanserte algoritmiske verktøy for å generere komplekse geometriske former basert på matematiske forhold og parameter. Denne tilnærminga gjer det mogleg å utforske eit breitt spekter av formvariasjonar og skape innovative geometriske løysingar som kan vere utfordrande å oppnå med tradisjonelle designmetodar.
          </p>
          <p className="mb-6">
            Prosessen omfattar følgjande steg:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Definering av grunnleggande geometriske parameter</li>
            <li>Geometrisk kontroll gjennom numeriske verdiar, koordinatar og rotasjon</li>
            <li>Transformasjon av former gjennom matematiske operasjonar</li>
            <li>Generering av komplekse geometriske strukturar inkludert kurver, overflater og volum</li>
            <li>Optimalisering av form basert på definerte kriterium</li>
            <li>Iterativ forbetring av designet</li>
          </ol>
          <p className="mb-6">
            Gjennom parametrisk design kan vi raskt tilpasse og optimalisere formene våre, noko som resulterer i meir effektive og estetisk tiltalande produkt. Denne metoden opnar for nye moglegheiter innan produktdesign, arkitektur og kunstnarisk uttrykk.
          </p>
          <p>
            Dette parametriske designsystemet mogleggjer rask utforsking av ulike formvariasjonar og gjev høve til å skape innovative geometriske løysingar som kan vere utfordrande å oppnå med tradisjonelle designmetodar.
          </p>
        </div>
      </div>
    </section>
  )
}