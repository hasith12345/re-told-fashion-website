export interface Cloth {
  id: string
  name: string
  teaser: string
  story: string
  description: {
    inspiration: string
    fabric: string
    silhouette: string
    purpose: string
  }
  image: string
  gallery: string[]
}

export const cloths: Cloth[] = [
  {
    id: 'the-awakening',
    name: 'The Awakening',
    teaser: 'A quiet emergence of hidden identity-where the past begins to surface through subtle, layered forms.',
    story: 'The Minimalist Drape was born from the concept of negative space—where silence speaks louder than words. Every fold is intentional, every line purposeful.',
    description: {
      inspiration: 'Inspired by the Japanese philosophy of "ma" (empty space), this piece celebrates what is not shown rather than what is. The design draws from architectural minimalism and the clean lines of contemporary sculpture.',
      fabric: 'Premium organic linen with a subtle matte finish. The fabric drapes with effortless grace, revealing the designer\'s intent with every movement.',
      silhouette: 'An oversized, deconstructed silhouette that challenges traditional proportions. The asymmetrical draping creates visual interest while maintaining a clean, sophisticated profile.',
      purpose: 'Perfect for those who appreciate refined simplicity. This piece transitions seamlessly from studio to street, from creative workspace to curated social spaces.',
    },
    image: '/Design2/1000324627.jpg',
    gallery: [
      '/Design2/1000324627.jpg',
      '/Design2/1000324590.jpg',
      '/Design2/1000324593.jpg',
      '/Design2/1000324594.jpg',
      '/Design2/1000324597.jpg',
      '/Design2/1000324600.jpg',
      '/Design2/1000324602.jpg',
      '/Design2/1000324606.jpg',
      '/Design2/1000324610.jpg',
      '/Design2/1000324611.jpg',
      '/Design2/1000324614.jpg',
      '/Design2/1000324618.jpg',
      '/Design2/1000324620.jpg',
      '/Design2/1000324622.jpg',
      '/Design2/1000324623.jpg',
      '/Design2/1000324625.jpg',
      '/Design2/1000324628.jpg',
      '/Design2/1000324631.jpg',
      '/Design2/1000324632.jpg',
      '/Design2/1000324633.jpg',
    ],
  },
  {
    id: 'the-shadow',
    name: 'The Shadow',
    teaser: 'A deeper exploration of mystery and duality, expressing the tension between seen and unseen.',
    story: 'The Structured Form represents a conversation between craft and geometry. It is a garment that empowers, that makes the wearer feel intentional and present.',
    description: {
      inspiration: 'Drawing from brutalist architecture and fashion\'s most iconic structured pieces, this garment celebrates the power of clean lines and geometric harmony. It\'s a tribute to designers who refuse to compromise on form.',
      fabric: 'High-quality cotton-blend with a crisp finish that holds its shape. The structured nature of the fabric ensures longevity and maintains its architectural integrity even after countless wears.',
      silhouette: 'Precisely tailored with sharp shoulders and a defined waistline. The silhouette works with the body while maintaining its distinct character—neither too tight nor too loose, but perfectly intentional.',
      purpose: 'Designed for moments that demand presence. Whether in a lecture hall, creative studio, or professional setting, this piece projects quiet confidence and refined taste.',
    },
    image: '/Design1/1000324619.jpg',
    gallery: [
      '/Design1/1000324619.jpg',
      '/Design1/1000324584.jpg',
      '/Design1/1000324586.jpg',
      '/Design1/1000324587.jpg',
      '/Design1/1000324588.jpg',
      '/Design1/1000324589.jpg',
      '/Design1/1000324595.jpg',
      '/Design1/1000324604.jpg',
      '/Design1/1000324613.jpg',
      '/Design1/1000324615.jpg',
      '/Design1/1000324616.jpg',
      '/Design1/1000324624.jpg',
      '/Design1/1000324629.jpg',
      '/Design1/1000324634.jpg',
    ],
  },
  {
    id: 'the-revelation',
    name: 'The Revelation',
    teaser: 'The story unfolds fully-bold, expressive, and unapologetic, where myth transforms into presence.',
    story: 'The Editorial Essence is our most narrative piece—it tells stories through layering, texture, and thoughtful details. It is fashion as literature, garments as poetry.',
    description: {
      inspiration: 'Inspired by editorial photography, typography, and the beauty of imperfection. This piece celebrates the in-between moments, the details others might overlook. It draws from fashion editorials that have shaped culture.',
      fabric: 'Luxurious blend of natural fibers with subtle texture variations. The layered construction creates depth, inviting closer inspection and discovering new details with each wearing.',
      silhouette: 'Layered and nuanced, with strategic fabric combinations that create visual and tactile interest. The silhouette is modern yet timeless, designed to feel fresh season after season.',
      purpose: 'For the storyteller, the creative thinker, the individual who sees fashion as a form of expression. This piece rewards those who look closely and appreciate the narrative of craft.',
    },
    image: '/Design3/1000324592.jpg',
    gallery: [
      '/Design3/1000324592.jpg',
      '/Design3/1000324591.jpg',
      '/Design3/1000324596.jpg',
      '/Design3/1000324598.jpg',
      '/Design3/1000324603.jpg',
      '/Design3/1000324608.jpg',
    ],
  },
]

export function getClothById(id: string): Cloth | undefined {
  return cloths.find((cloth) => cloth.id === id)
}
