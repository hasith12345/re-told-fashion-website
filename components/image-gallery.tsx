'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative bg-secondary aspect-square overflow-hidden">
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
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
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
      )}
    </div>
  )
}
