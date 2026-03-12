import { LayoutWrapper } from '@/components/layout-wrapper'
import { HeroSection } from '@/components/hero-section'
import { FeaturedCourses } from '@/components/featured-courses'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <LayoutWrapper>
      <HeroSection />
      <FeaturedCourses />
      <CTASection />
    </LayoutWrapper>
  )
}
