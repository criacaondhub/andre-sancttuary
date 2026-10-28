import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { VivenciasSection } from '@/components/VivenciasSection'
import { MosaicoSection } from '@/components/MosaicoSection'
import { LocalSection } from '@/components/LocalSection'
import { QuemConduSection } from '@/components/QuemConduSection'
import { CronogramaSection } from '@/components/CronogramaSection'
import { FormSection } from '@/components/FormSection'
import { Footer } from '@/components/Footer'
import { FloatingCTA } from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VivenciasSection />
        <MosaicoSection />
        <LocalSection />
        <QuemConduSection />
        <CronogramaSection />
        <FormSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
