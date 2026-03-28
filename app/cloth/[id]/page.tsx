import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/Footer'
import { ImageGallery } from '@/components/image-gallery'
import { ClothCard } from '@/components/cloth-card'
import { getClothById, cloths } from '@/lib/cloth-data'
import { notFound } from 'next/navigation'

interface ClothDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return cloths.map((cloth) => ({
    id: cloth.id,
  }))
}

export async function generateMetadata({ params }: ClothDetailPageProps) {
  const { id } = await params
  const cloth = getClothById(id)

  if (!cloth) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${cloth.name} | reTold`,
    description: cloth.story,
  }
}

export default async function ClothDetailPage({ params }: ClothDetailPageProps) {
  const { id } = await params
  const cloth = getClothById(id)

  if (!cloth) {
    notFound()
  }

  const relatedItems = cloths.filter((item) => item.id !== cloth.id)

  return (
    <>
      <Navbar />
      <main>
        {/* Back Navigation */}
        <div className="bg-background border-b border-border sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m7 7l-7-7 7-7"
                />
              </svg>
              Back to Collection
            </Link>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
              {/* Gallery */}
              <div>
                <ImageGallery images={cloth.gallery} alt={cloth.name} />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-start">
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
                  {cloth.name}
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {cloth.teaser}
                </p>

                {/* Story */}
                <div className="mb-12 pb-12 border-b border-border">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                    The Story
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {cloth.story}
                  </p>
                </div>

                {/* Details */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Inspiration
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {cloth.description.inspiration}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Fabric
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {cloth.description.fabric}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Silhouette
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {cloth.description.silhouette}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Purpose
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {cloth.description.purpose}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex gap-4">
                  <button className="flex-1 px-8 py-3 bg-foreground text-primary hover:bg-muted transition-colors text-sm tracking-wide font-medium">
                    Add to Collection
                  </button>
                  <button className="flex-1 px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-primary transition-all text-sm tracking-wide font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Related Items */}
            <div className="border-t border-border pt-20">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-12">
                Explore More
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {relatedItems.map((item) => (
                  <ClothCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    teaser={item.teaser}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
