"use client"

import { useState, useEffect } from 'react'
import HeroHeader from '@/components/hero-header'
import { ThreeDModelsSection } from '@/components/3d-models-section'
import DesignProcessSection from '@/components/design-process-section'
import FormExplorationSection from '@/components/form-exploration-section'
import SpomenikSection from '@/components/spomenik-section'
import TwoDRendersSection from '@/components/2d-renders-section'
import CufflinkSection from '@/components/cufflink-section'
import Loading from '@/components/loading'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto px-4">
      <HeroHeader />
      <ThreeDModelsSection />
      <DesignProcessSection />
      <FormExplorationSection />
      <SpomenikSection />
      <TwoDRendersSection />
      <CufflinkSection />
    </div>
  )
}