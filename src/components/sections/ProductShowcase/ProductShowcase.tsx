import { useState } from 'react'
import { motion } from 'framer-motion' // تم إزالة AnimatePresence
import { plantsData } from '@/data/plants'
import type { Plant } from '@/types'

import heartIcon from '@/assets/favourite.svg'
import dropletIcon from '@/assets/water-pump.svg'
import leafIcon from '@/assets/leafs-bg.webp'
import rulerIcon from '@/assets/ruler.svg'
import addToCartIcon from '@/assets/add-to-cart.svg'

export const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // تم إزالة سطر activePlant لأنه غير مستخدم

  const specTypes = [
    { icon: heartIcon, label: 'Lifespan', getValue: (p: Plant) => p.lifespan },
    { icon: rulerIcon, label: 'Height', getValue: (p: Plant) => p.height },
    { icon: dropletIcon, label: 'Watering', getValue: (p: Plant) => p.watering },
  ]

  const handlePlantChange = (newIndex: number) => {
    if (newIndex === activeIndex) return
    setActiveIndex(newIndex)
  }

  return (
    <section
      className="relative bg-[#EFF7EF] pt-[92px] 
pb-[120px] md:pb-[130px] overflow-visible"
    >
      <div className=" mx-auto max-w-7xl px-4 md:px-16 lg:px-[64px]">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center min-h-[480px]">
          <div className="relative z-0 flex justify-center items-center w-full lg:w-[480px] h-[320px] lg:h-[562px] overflow-hidden">
            {plantsData.map((plant, index) => (
              <motion.img
                key={plant.id}
                src={plant.image}
                alt={plant.name}
                width={480}
                height={562}
                className="absolute w-[450px] lg:w-[480px] h-auto object-contain"
                animate={{ 
                  x: `${(index - activeIndex) * 100}%`,
                  scale: activeIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full flex flex-col justify-center bg-[#EFF7EF] lg:pl-20 pt-4 lg:pt-0 overflow-hidden lg:overflow-visible">
            
            <img
              src={leafIcon}
              alt=""
              aria-hidden
              className="absolute transform translate-x-[258px] translate-y-[-205px] z-0 pointer-events-none"
            />
          
            <div className="relative z-10 w-full">
              <div className="relative h-[44px] w-full overflow-hidden mb-4">
                {plantsData.map((plant, index) => (
                  <motion.h2
                    key={plant.id}
                    className="absolute top-0 left-0 font-tomorrow text-[32px] font-bold text-[#1F1F1FE0]"
                    animate={{ y: `${(index - activeIndex) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  >
                    {plant.name}
                  </motion.h2>
                ))}
              </div>
              
              <div className="relative mb-6 min-h-[60px]">
                <div className="relative h-[96px] overflow-hidden mb-6">
                  {plantsData.map((plant, index) => (
                    <motion.p
                      key={plant.id}
                      className="
                        absolute
                        top-0
                        left-0
                        w-full
                        text-[#1F1F1FA8]
                        text-[18px]
                        leading-[1.8]
                        max-w-[620px]
                      "
                      animate={{
                        y: `${(index - activeIndex) * 100}%`,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                    >
                      {plant.description}
                    </motion.p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-6 lg:gap-11 mb-10">
                {specTypes.map((spec) => (
                  <div key={spec.label} className="flex gap-3">
                    <img src={spec.icon} className="w-5 h-5 mt-3" alt="" />
                    <div>
                      <p className="text-[#B0B0B0] text-[13px] mb-1">
                        {spec.label}
                      </p>
                      <div className="relative h-[28px] w-[110px] overflow-hidden">
                        {plantsData.map((plant, index) => (
                          <motion.p
                            key={plant.id}
                            className="absolute top-0 left-0 font-medium text-[16px] text-[#1F1F1F]/80 whitespace-nowrap"
                            animate={{ y: `${(index - activeIndex) * 100}%` }}
                            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                          >
                            {spec.getValue(plant)}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div>
               <button
                 className="
                   group h-[48px] pl-8 pr-1 rounded-full bg-[#346E3C] hover:bg-[#28572e] 
                   transition-colors duration-300 text-white flex items-center gap-2 
                   shadow-[0_4px_12px_rgba(52,110,60,0.12)]
                 "
               >
                 <span className="text-[18px] font-medium">Add to my desk</span>
                 <span className="text-[18px] text-white/50">•</span>
                 
                 <div className="relative h-[28px] w-[65px] block">
                   {plantsData.map((plant, index) => (
                     <motion.span
                       key={plant.id}
                       className="absolute top-0 left-0 w-full text-left text-[18px] font-medium leading-[28px]"
                       initial={false}
                       animate={{ 
                         opacity: index === activeIndex ? 1 : 0 
                       }}
                       transition={{ duration: 0.5, ease: 'easeInOut' }}
                       style={{ pointerEvents: index === activeIndex ? 'auto' : 'none' }}
                     >
                       {plant.price}
                     </motion.span>
                   ))}
                 </div>

                 <span className="w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center shrink-0">
                   <img 
                     src={addToCartIcon} 
                     className="w-6 h-6 transition-transform duration-600 ease-in-out group-hover:-rotate-45" 
                     alt="cart icon" 
                   />
                 </span>
               </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Thumbnail strip - scrollable on mobile, centered on desktop */}
      <div className="absolute left-0 right-0 -bottom-[44px] z-30">
        <div className="flex justify-start md:justify-center gap-3 md:gap-4 px-4 md:px-0 overflow-x-auto scrollbar-hide">
          {plantsData.map((plant, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={plant.id}
                onClick={() => handlePlantChange(index)}
                animate={{
                  scale: isActive ? 1 : 0.95,
                  borderColor: isActive ? '#346E3C' : 'transparent',
                  boxShadow: isActive
                    ? '0px 4px 16px rgba(52,110,60,0.12)'
                    : 'none',
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-xl flex-shrink-0 flex items-center justify-center bg-[#FCF7F2] border-[1.5px]"
              >
                <img
                  src={plant.thumb}
                  alt={plant.name}
                  className="w-[46px] h-[46px] md:w-[58px] md:h-[58px] object-contain"
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  )
}