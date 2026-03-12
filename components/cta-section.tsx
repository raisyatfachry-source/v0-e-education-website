import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-foreground sm:text-4xl">
              Ready to start learning?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Join thousands of students already learning on EduPro. Get access to all courses, resources, and community support.
            </p>

            <ul className="mb-8 space-y-3">
              {[
                'Lifetime access to all purchased courses',
                'Download courses for offline learning',
                'Certificate of completion',
                '30-day money-back guarantee',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/courses">
                <Button size="lg" variant="secondary">
                  Browse Courses
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <div className="rounded-lg bg-primary-foreground/10 p-6 backdrop-blur">
                <h3 className="mb-2 font-semibold text-primary-foreground">
                  30-Day Free Trial
                </h3>
                <p className="text-sm text-primary-foreground/90">
                  Access all premium courses risk-free for the first month
                </p>
              </div>
              <div className="rounded-lg bg-primary-foreground/10 p-6 backdrop-blur">
                <h3 className="mb-2 font-semibold text-primary-foreground">
                  Expert Instructors
                </h3>
                <p className="text-sm text-primary-foreground/90">
                  Learn from industry professionals with years of experience
                </p>
              </div>
              <div className="rounded-lg bg-primary-foreground/10 p-6 backdrop-blur">
                <h3 className="mb-2 font-semibold text-primary-foreground">
                  24/7 Support
                </h3>
                <p className="text-sm text-primary-foreground/90">
                  Get help whenever you need it from our dedicated support team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
