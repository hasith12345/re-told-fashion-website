'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="reTold"
              width={80}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-sm tracking-wide text-foreground hover:text-muted-foreground transition-all duration-300 hover:tracking-wider"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wide text-foreground hover:text-muted-foreground transition-all duration-300 hover:tracking-wider"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wide text-foreground hover:text-muted-foreground transition-all duration-300 hover:tracking-wider"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-sm tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="block text-sm tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm tracking-wide text-foreground hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
