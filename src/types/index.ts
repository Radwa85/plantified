export interface Plant {
  id: number
  name: string
  description: string
  lifespan: string
  height: string
  watering: string
  price: string
  image: string
  thumb: string
}

export interface FeaturedProduct {
  id: string
  name: string
  headline: string
  price: number
  image: string
}

export interface Season {
  id: string
  name: string
  period: string
  accent: string
  icon: 'spring' | 'summer' | 'autumn' | 'winter'
  tasks: CareTask[]
}

export interface CareTask {
  id: string
  label: string
  icon: string
}
