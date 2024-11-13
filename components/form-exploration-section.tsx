import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function FormExplorationSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Utforsking av Form</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
          <div className="relative h-64 md:h-full">
            <Image
              src="/images/form-exploration-tool.png"
              alt="Form Exploration Tool"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}