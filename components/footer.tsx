'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-primary mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                E
              </div>
              <span>EduPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering learners worldwide with quality education
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm text-muted-foreground transition hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm text-muted-foreground transition hover:text-primary">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground transition hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition hover:text-primary">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 EduPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
