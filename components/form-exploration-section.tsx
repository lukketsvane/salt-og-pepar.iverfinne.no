"use client"
import React from 'react'
import Link from 'next/link'

export default function FormExplorationSection() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8 border-b border-white pb-2">Utforsking av Form</h2>
      <div className="prose prose-invert max-w-none">
        <p className="mb-4">
          I startfasen av prosjektet utvikla eg eit{" "}
          <Link href="https://boolean.iverfinne.no/" className="text-blue-400 hover:text-blue-300 underline">
            nettbasert verktøy for boolske operasjonar
          </Link>{" "}
          som let meg utforske korleis ulike geometriske former kan kombinerast. Dette verktøyet gjorde det mogleg å eksperimentere med skjering, union og subtraksjon av primitive former som kuber, sylindrar og sfærar.
        </p>
        <p>
          Verktøyet vart ein viktig del av den tidlege utforskingsfasen, der eg kunne teste ulike kombinasjonar og sjå korleis formene påverka kvarandre. Dette la grunnlaget for dei meir komplekse formene som seinare vart utvikla i prosjektet.
        </p>
      </div>
    </section>
  )
}