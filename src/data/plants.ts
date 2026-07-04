import type { Plant } from '@/types'
import cactusImg from '@/assets/cacus.webp'
import cactusImgMobile from '@/assets/cacus-mobile.webp'
import monsteraImg from '@/assets/monstera.webp'
import monsteraImgMobile from '@/assets/monstera-mobile.webp'
import aloeImg from '@/assets/aleo_vera.webp'
import aloeImgMobile from '@/assets/aleo_vera-mobile.webp'
import pileaImg from '@/assets/pilea.webp'
import pileaImgMobile from '@/assets/pilea-mobile.webp'
import pothosImg from '@/assets/pothos.webp'
import pothosImgMobile from '@/assets/pothos-mobile.webp'
import snakePlantImg from '@/assets/snake_planet.webp'
import snakePlantImgMobile from '@/assets/snake_planet-mobile.webp'
export const plantsData: Plant[] = [
  {
    id: 1,
    name: 'Cactus: Spike',
    description:
      "The ultimate minimalist companion for your workspace. Spike doesn't care about drama, never complains about the dry office air, and is perfectly happy being ignored for weeks. It stores its own water and guards your desk like a tiny, green, prickly soldier.",
    lifespan: '10 – 50 Years',
    height: '15 – 30 cm',
    watering: '1x / Month',
    price: '18.99$',
    image: cactusImg,
    thumb: cactusImgMobile,
  },
  {
    id: 2,
    name: 'Monstera: Milo',
    description:
      'Bold split leaves and an unmistakable personality. Milo turns any workspace into a mini jungle while staying surprisingly easy to maintain and bringing serious aesthetic value to your desk.',
    lifespan: '10 – 30 Years',
    height: '30 – 60 cm',
    watering: '1x / Week',
    price: '29.99$',
    image: monsteraImg,
    thumb: monsteraImgMobile,
  },
  {
    id: 3,
    name: 'Aloe: Glow',
    description:
      'Clean lines, soothing presence, and a plant that feels as practical as it looks. Glow is perfect for sunny windowsills and minimalist desk setups that need a quiet, healing companion.',
    lifespan: '5 – 25 Years',
    height: '30 – 60 cm',
    watering: '1x / 3 Weeks',
    price: '12.99$',
    image: aloeImg,
    thumb: aloeImgMobile,
  },
  {
    id: 4,
    name: 'Pilea: Pearl',
    description:
      'Round, cheerful, and absolutely trendy. Pearl is the friendly green button that brightens any shelf or desk corner without demanding too much attention or care from you.',
    lifespan: '5 – 15 Years',
    height: '20 – 30 cm',
    watering: '1x / Week',
    price: '14.99$',
    image: pileaImg,
    thumb: pileaImgMobile,
  },
  {
    id: 5,
    name: 'Pothos: Vine',
    description:
      'Trailing, forgiving, and endlessly adaptable. Vine cascades beautifully from a shelf and keeps growing even when your schedule gets chaotic and you forget to water it for a week.',
    lifespan: '5 – 15 Years',
    height: '15 – 35 cm',
    watering: '1x / Week',
    price: '16.99$',
    image: pothosImg,
    thumb: pothosImgMobile,
  },
  {
    id: 6,
    name: 'Snake Plant: Blade',
    description:
      'Architectural upright leaves and near-bulletproof resilience. Blade filters the air while looking sharp beside your keyboard, asking for almost nothing in return.',
    lifespan: '10 – 25 Years',
    height: '25 – 45 cm',
    watering: '1x / Month',
    price: '19.99$',
    image: snakePlantImg,
    thumb: snakePlantImgMobile,
  },
]