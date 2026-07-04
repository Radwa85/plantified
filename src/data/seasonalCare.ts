import type { Season } from '@/types'

export const seasons: Season[] = [
  {
    id: 'spring',
    name: 'Spring',
    period: 'March – May',
    accent: '#39BB4B',
    icon: 'spring',
    tasks: [
      { id: 's1', label: 'Water every 3 days', icon: 'water' },
      { id: 's2', label: 'Add fertilizer', icon: 'fertilizer' },
      { id: 's3', label: 'Move to bright light', icon: 'light' },
    ],
  },
  {
    id: 'summer',
    name: 'Summer',
    period: 'June – August',
    accent: '#F59E0B',
    icon: 'summer',
    tasks: [
      { id: 'u1', label: 'Water daily', icon: 'water' },
      { id: 'u2', label: 'Increase air circulation', icon: 'air' },
      { id: 'u3', label: 'Protect from heat', icon: 'heat' },
    ],
  },
  {
    id: 'autumn',
    name: 'Autumn',
    period: 'September – November',
    accent: '#F97316',
    icon: 'autumn',
    tasks: [
      { id: 'a1', label: 'Reduce watering', icon: 'water' },
      { id: 'a2', label: 'Prune old growth', icon: 'prune' },
      { id: 'a3', label: 'Watch temperature', icon: 'temperature' },
    ],
  },
  {
    id: 'winter',
    name: 'Winter',
    period: 'December – February',
    accent: '#6366F1',
    icon: 'winter',
    tasks: [
      { id: 'w1', label: 'Water sparingly', icon: 'water' },
      { id: 'w2', label: 'Reduce light', icon: 'light' },
      { id: 'w3', label: 'Protect from drafts', icon: 'draft' },
    ],
  },
]
