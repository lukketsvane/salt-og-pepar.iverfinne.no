"use client"

import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'dark',
        securityLevel: 'loose',
        themeVariables: {
          fontFamily: 'Inter, sans-serif',
          primaryColor: '#ffffff',
          primaryTextColor: '#ffffff',
          primaryBorderColor: '#ffffff',
          lineColor: '#ffffff',
          secondaryColor: '#006100',
          tertiaryColor: '#fff',
        },
      })

      mermaid.render('mermaid-diagram', chart).then((result) => {
        if (ref.current) {
          ref.current.innerHTML = result.svg
        }
      })
    }
  }, [chart])

  return <div ref={ref} className="mermaid w-full overflow-x-auto" />
}