'use client'

import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const visibleCount = 8
  const visibleImages = showAll ? images : images.slice(0, visibleCount)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!lightboxOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxOpen, goNext, goPrev])

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div
        className="relative bg-secondary aspect-square overflow-hidden cursor-pointer"
        onClick={() => openLightbox(selectedIndex)}
      >
        <Image
          src={images[selectedIndex] || "/placeholder.svg"}
          alt={`${alt} - view ${selectedIndex + 1}`}
          width={800}
          height={800}
          className="w-full h-full object-cover transition-opacity duration-300"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-3">
            {visibleImages.map((image, index) => (
              <button
                key={index}
                onClick={() => { setSelectedIndex(index); openLightbox(index) }}
                className={`relative aspect-square overflow-hidden transition-all ${
                  selectedIndex === index ? 'ring-2 ring-foreground' : 'hover:ring-2 hover:ring-border'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${alt} - thumbnail ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {images.length > visibleCount && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {showAll ? 'Show Less' : `See More (${images.length - visibleCount} more)`}
            </button>
          )}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Previous arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white text-4xl z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex] || "/placeholder.svg"}
              alt={`${alt} - ${lightboxIndex + 1}`}
              width={1200}
              height={1200}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-center text-white/50 text-sm mt-4">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext() }}
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white text-4xl z-10"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
