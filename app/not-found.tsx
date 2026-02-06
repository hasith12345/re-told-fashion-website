import Link from 'next/link'
import { Navbar } from '@/components/navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            The story you're looking for doesn't exist in our collection. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-foreground text-primary hover:bg-muted transition-colors text-sm tracking-wide font-medium"
          >
            Return to Collection
          </Link>
        </div>
      </main>
    </>
  )
}
