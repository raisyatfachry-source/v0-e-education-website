'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            E
          </div>
          <span className="hidden sm:inline">EduPro</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/courses" className="text-sm font-medium text-foreground transition hover:text-primary">
            Courses
          </Link>
          <Link href="/tutorials" className="text-sm font-medium text-foreground transition hover:text-primary">
            Tutorials
          </Link>
          <Link href="/resources" className="text-sm font-medium text-foreground transition hover:text-primary">
            Resources
          </Link>
          <Link href="/profile" className="text-sm font-medium text-foreground transition hover:text-primary">
            Profile
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/profile" className="hidden sm:inline-block">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/courses" className="hidden sm:inline-block">
            <Button size="sm">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/courses" className="text-sm font-medium text-foreground transition hover:text-primary">
              Courses
            </Link>
            <Link href="/tutorials" className="text-sm font-medium text-foreground transition hover:text-primary">
              Tutorials
            </Link>
            <Link href="/resources" className="text-sm font-medium text-foreground transition hover:text-primary">
              Resources
            </Link>
            <Link href="/profile" className="text-sm font-medium text-foreground transition hover:text-primary">
              Profile
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
