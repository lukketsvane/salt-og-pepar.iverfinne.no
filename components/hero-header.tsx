import React from 'react'

export default function HeroHeader() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Geometriske Studiar: Salt og Pepar
        </h1>
        <p className="text-xl md:text-2xl text-white">
          Utforsking av form og funksjon gjennom parametrisk design
        </p>
      </div>
    </header>
  )
}