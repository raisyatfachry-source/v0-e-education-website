import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Welcome to the future of learning
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Learn Anything,
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Anytime, Anywhere
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join thousands of learners discovering new skills with our comprehensive courses, interactive tutorials, and curated resources. Start your learning journey today.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/courses">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#featured">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                See Featured
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-card p-4">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Expert-Led Courses</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <p className="text-sm text-muted-foreground">Active Learners</p>
            </div>
            <div className="rounded-lg bg-card p-4">
              <div className="text-3xl font-bold text-primary">95%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
