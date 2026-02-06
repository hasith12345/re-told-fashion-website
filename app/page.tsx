import { Navbar } from '@/components/navbar'
import { ClothCard } from '@/components/cloth-card'
import { cloths } from '@/lib/cloth-data'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground mb-6">
              Stories Stitched into Form
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              reTold is a modern fashion brand for creative professionals, lecturers, and fashion enthusiasts who believe that what we wear tells our story.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <button className="px-8 py-3 bg-foreground text-primary hover:bg-muted transition-colors text-sm tracking-wide font-medium">
                Explore Collection
              </button>
              <button className="px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-primary transition-all text-sm tracking-wide font-medium">
                Our Story
              </button>
            </div>
          </div>
        </section>

        {/* Collection Section */}
        <section className="py-20 bg-background px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Our Collection
              </h3>
              <p className="text-muted-foreground max-w-2xl">
                Each piece in our collection represents a dialogue between form and function, between inspiration and craft. Explore the stories behind our creations.
              </p>
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
                  Intentional Design
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece is designed with purpose. We believe in thoughtful creation where form, function, and story intertwine.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Quality Craft
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize premium materials and expert craftsmanship. Our garments are built to endure and evolve with you.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Creative Community
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Designed for those who think deeply about the world they create. Fashion as a form of self-expression and storytelling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-primary py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h5 className="font-serif font-semibold mb-4">reTold</h5>
                <p className="text-sm text-primary/70">Stories stitched into form.</p>
              </div>
              <div>
                <h5 className="font-serif font-semibold mb-4">Collections</h5>
                <ul className="text-sm text-primary/70 space-y-2">
                  <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">All Items</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-serif font-semibold mb-4">Company</h5>
                <ul className="text-sm text-primary/70 space-y-2">
                  <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-serif font-semibold mb-4">Follow</h5>
                <ul className="text-sm text-primary/70 space-y-2">
                  <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-primary/20 pt-8">
              <p className="text-sm text-primary/70 text-center">
                © 2024 reTold. All stories preserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
