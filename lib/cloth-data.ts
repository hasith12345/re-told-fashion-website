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
    name: 'රැද්රාක්ෂි (Radrakshi) - The Evil Eye',
    teaser: 'A demon–cobra hybrid who exists in silence. Her eyes can freeze any enemy - body and soul.',
    story: 'She doesn\'t chase - she watches. රැද්රාක්ෂි exists in the space between stillness and terror, a presence that paralyzes before it strikes. Her gaze is her weapon, her silence is her power.',
    description: {
      inspiration: 'Born from the myth of the Evil Eye - a force that freezes not just the body, but the soul. රැද්රාක්ෂි channels the primal fear of being watched by something ancient and unblinking.',
      fabric: 'Tie-dyed hood in shaded tones with pleated side straps. The textures shift and ripple like something alive, echoing the wet, always-moving hair that frames her face.',
      silhouette: 'Wet, ripple-like hair that is always moving. A hooded silhouette with tie-dyed shading and pleated side straps that evoke the coiled readiness of a cobra.',
      purpose: 'She doesn\'t chase - she watches. This design embodies silent dominance, the power of stillness, and the terror of an unbroken gaze.',
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
    name: 'මණිකාලිකා (Manikalika) - The Dark Gem',
    teaser: 'A dark, living gem guarded by a cobra. She is beauty and danger in one form.',
    story: 'Her presence attracts - she\'s a mind destroyer. මණිකාලිකා doesn\'t fight with force - she wins before it begins. Feminine, seductive, but clever in battle, she is beauty weaponized.',
    description: {
      inspiration: 'Inspired by the legend of a dark, living gem guarded by a cobra - a jewel that lures and destroys. මණිකාලිකා embodies the dangerous allure of something too beautiful to resist.',
      fabric: 'Long, wet wave hair textures translated into flowing, powerful fabric. Soft yet commanding materials that move with feminine grace while concealing lethal intent.',
      silhouette: 'Feminine and seductive with soft, powerful beauty. The silhouette draws you in - long flowing lines, wet-wave textures, and a presence that commands without force.',
      purpose: 'She doesn\'t fight with force - she wins before it begins. This design is for the one whose presence alone shifts the balance of power.',
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
    name: 'සෝනාධීශ්වර (Sonadheeshwara) - Shadow Captain',
    teaser: 'The captain under the demon power of Maha Sona. He awakens in the night - unseen, unstoppable.',
    story: 'His eyes are cold. No mercy. He strikes from shadows, without warning. සෝනාධීශ්වර is not a fighter - he is the betrayal of the battle. Silent, ruthless, strategic.',
    description: {
      inspiration: 'Born from the demon power of Maha Sona - the Shadow Captain who awakens in the night. සෝනාධීශ්වර channels the terror of an unseen enemy who strikes without warning.',
      fabric: 'Covered hair with red fabric. See-through mesh front that reveals and conceals in equal measure - a material language of deception and stealth.',
      silhouette: 'Red fabric-covered head with a see-through mesh front. The silhouette is sharp, shadowed, and built for silent movement - designed to vanish and reappear.',
      purpose: 'He is not a fighter - he is the betrayal of the battle. This design embodies silent ruthlessness, strategic precision, and the cold mercy of shadows.',
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
