import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { ClothCard } from '@/components/cloth-card'
import { cloths } from '@/lib/cloth-data'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <Image
            src="/1000324612.jpg"
            alt="reTold hero"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <Image
            src="/WhatsApp Image 2026-04-01 at 16.43.28.jpeg"
            alt="reTold hero mobile"
            fill
            className="object-cover md:hidden"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-6">
              Stories Once Known Now reTold Through Fashion
            </h2>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              reTold is a contemporary Sri Lankan streetwear brand rooted in storytelling, Sinhala mythology, and cultural nostalgia where each garment becomes a bold, poetic retelling of identity.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <a href="#collection" className="px-8 py-3 bg-white text-black hover:bg-white/80 hover:scale-105 active:scale-95 transition-all duration-300 text-sm tracking-wide font-medium">
                Explore Collection
              </a>
              <a href="/about" className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 text-sm tracking-wide font-medium">
                Our Story
              </a>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="py-20 bg-background px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">
                Chapter 1 - ගූඪ
              </h3>
              <p className="text-sm text-muted-foreground/70 italic mb-6">
                A hidden story reTold in form.
              </p>
              <div className="max-w-2xl space-y-4 text-muted-foreground">
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1">The Story</h4>
                  <p>Chapter 1 - ගූඪ explores the unseen, the mysterious, and the untold layers of Sri Lankan mythology. Each piece translates hidden narratives into bold, surreal streetwear-where garments become stories in motion.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1">Inspiration</h4>
                  <p>Drawn from Sinhala myths, ancient symbols, and cultural memory, reimagined through a dark, poetic, and contemporary lens.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1">Design Language</h4>
                  <p>Layering, textures, and symbolic details act as storytelling elements-turning each outfit into a visual narrative.</p>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {cloths.map((cloth) => (
                <ClothCard
                  key={cloth.id}
                  id={cloth.id}
                  name={cloth.name}
                  teaser={cloth.teaser}
                  image={cloth.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Values Section */}
        <section className="py-20 bg-secondary px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Our Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Intentional Storytelling
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece begins with a story-where design, meaning, and emotion are inseparable.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Cultural Craft
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Rooted in Sri Lankan heritage, shaped through ethical and local craftsmanship.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Modern Myth
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We don't recreate the past-we reimagine it, transforming mythology into a new language for the streets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
