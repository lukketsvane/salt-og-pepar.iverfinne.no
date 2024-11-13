import HeroHeader from '@/components/hero-header'
import ThreeDModelsSection from '@/components/3d-models-section'
import DesignProcessSection from '@/components/design-process-section'
import FormExplorationSection from '@/components/form-exploration-section'
import SpomenikSection from '@/components/spomenik-section'
import TwoDRendersSection from '@/components/2d-renders-section'
import CufflinkSection from '@/components/cufflink-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      <ThreeDModelsSection />
      <DesignProcessSection />
      <FormExplorationSection />
      <SpomenikSection />
      <TwoDRendersSection />
      <CufflinkSection />
    </main>
  )
}