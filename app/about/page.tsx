import { Navbar } from '@/components/navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex flex-col">
        {/* Hero */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Once upon a time… now reTold through fashion.
            </p>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 flex-1">
          <div className="max-w-4xl mx-auto space-y-16">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                Who We Are
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                reTold is a contemporary Sri Lankan streetwear brand rooted in storytelling, Sinhala mythology, and cultural nostalgia—where each garment becomes a bold, poetic retelling of identity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each piece is a conversation between past and future, reimagining Sri Lankan heritage through a surreal, modern street lens.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                Our Collections
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each collection is a chapter—retelling myths, legends, and forgotten stories through form, texture, and silhouette. Explore garments where storytelling becomes design.
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8">
                Our Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2">Intentional Storytelling</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every piece begins with a story—where design, meaning, and emotion are inseparable.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2">Cultural Craft</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Rooted in Sri Lankan heritage, shaped through ethical and local craftsmanship.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2">Modern Myth</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We don&#39;t recreate the past—we reimagine it, transforming mythology into a new language for the streets.
                  </p>
                </div>
              </div>
            </div>

            {/* Brand DNA */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6">
                Brand DNA
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  Storytelling as design DNA
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  Surreal modern aesthetic
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  Cultural authenticity
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                  Ethical, local craftsmanship
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
