import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export const RevealOnScroll = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: RevealOnScrollProps) => {
  const prefersReduced = useReducedMotion()

  const hiddenVariants: Record<string, any> = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none: { opacity: 0 },
  }

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: hiddenVariants[direction],
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
