import { HeroSection, HeroHeader } from '@/components/blocks/hero-section-5'
import { FeaturesSection, TestimonialsSection, PricingSection, FAQSection, Footer } from '@/components/blocks/landing-sections'

export default function Home() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <HeroSection />
                <FeaturesSection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection />
            </main>
            <Footer />
        </>
    )
}
