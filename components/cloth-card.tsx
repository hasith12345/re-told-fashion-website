'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ClothCardProps {
  id: string
  name: string
  teaser: string
  image: string
}

export function ClothCard({ id, name, teaser, image }: ClothCardProps) {
  return (
    <Link href={`/cloth/${id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden bg-secondary aspect-square mb-6">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={600}
            height={600}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-serif font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {teaser}
          </p>
        </div>
      </div>
    </Link>
  )
}
