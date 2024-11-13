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
      mermaid.initialize({ startOnLoad: true, theme: 'dark' })
      mermaid.run({ nodes: [ref.current] })
    }
  }, [chart])

  return <div ref={ref} className="mermaid">{chart}</div>
}