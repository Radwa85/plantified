import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import notifIcon from '@/assets/ic_notification (3).svg'
import heartIcon from '@/assets/ic_heart (2).svg'
import bagIcon from '@/assets/ic_bag.svg'

const NAV_ITEMS = [
  { label: 'Home', href: '#home', isActive: true },
  { label: 'Categories', href: '#categories' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacts', href: '#contacts' },
  { label: 'About us', href: '#about' },
]

const ACTION_ICONS = [
  { icon: notifIcon, label: 'Notifications' },
  { icon: heartIcon, label: 'Wishlist' },
  { icon: bagIcon, label: 'Cart' },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 animate-slide-down ${
        scrolled ? 'bg-plant-bg/95 backdrop-blur-md' : 'bg-plant-bg'
      }`}
    >
      <div className="w-full px-4 md:px-16 flex items-stretch border-b border-[#819E26]/20">        
      <a 
        href="#home" 
        className="flex items-center gap-2 font-bold text-xl text-plant-forest font-ubuntu shrink-0 py-4"
      >
        Plantified
      </a>

      <ul className="hidden md:flex items-stretch gap-10 ml-[58px]" role="list">
        {NAV_ITEMS.map(({ label, href, isActive }) => (
          <li key={label} className="relative flex items-center">
            <a
              href={href}
              className={`text-sm font-medium transition-colors ${
                isActive ? 'text-plant-forest' : 'text-gray-500 hover:text-plant-forest'
              }`}
            >
              {label}
            </a>
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-plant-forest rounded-t-[4px]" />
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 ml-auto py-4">
        {ACTION_ICONS.map(({ icon, label }) => (
          <button key={label} aria-label={label} title={label} className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity">
            <img src={icon} alt="" aria-hidden="true" />
          </button>
        ))}
      </div>
      </div>
    </motion.header>
  )
}