import { motion } from 'framer-motion';

const planetHand = `${import.meta.env.BASE_URL}Planet-Hand.webp`
const planetHandMobile = `${import.meta.env.BASE_URL}Planet-Hand-mobile.webp`;
import heroLeaf from '@/assets/hero-leaves.webp';
import heroLeafMobile from '@/assets/hero-leaves-mobile.webp';
import arrowRight from '@/assets/arrow-right.svg';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex justify-center items-center bg-plant-bg overflow-visible pb-[64px]">
      <div className="absolute left-0 bottom-[72%] z-20 w-full h-[200px] md:h-[200px] lg:h-[140px] overflow-visible pointer-events-none">
        <div className="relative w-full h-full">
          <motion.img 
            src={heroLeaf}
            srcSet={`${heroLeafMobile} 300w, ${heroLeaf} 790w`}
            sizes="(max-width: 768px) 300px, 790px"
            className="absolute top-0 left-0 w-full h-full object-contain object-left origin-bottom-left "
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            fetchPriority="high"
            alt="" 
            aria-hidden 
          />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-[64px] flex flex-col lg:flex-row items-center relative z-10 pt-[56px] overflow-hidden lg:overflow-visible">
        <div className="w-full  max-w-xl text-left z-10  pt-6 md:pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-tomorrow
              font-bold
              text-[32px]
              md:text-[32px]
              leading-[110%]
              tracking-[-0.03em]
              text-plant-dark
              mb-5
            "
          >
            Life is too short, Bring a <br />
            <span className="text-plant-forest">green</span> friend
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              text-[#666666]
              text-[16px]
              leading-[160%]
              max-w-[580px]
              mb-8
            "
          >
            Your screen shouldn't be the only thing you look at all day.
            Breathe life back into your workspace with low maintenance desk
            plants designed for busy minds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <span className="px-3 py-2 rounded-full bg-white text-sm font-medium text-plant-forest">
              A plant won't interrupt you
            </span>
            <span className="px-3 py-2 rounded-full bg-white text-sm font-medium text-plant-forest">
              A cute little roommate
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              className="
                flex
                items-center
                justify-between
                w-[260px]
                h-[48px]
                pl-8
                pr-1
                bg-plant-forest
                text-white
                rounded-full
                shadow-lg
                shadow-green-900/20
                font-medium
                text-base
                hover:bg-[#28572e] 
                shadow-[0_4px_12px_rgba(52,110,60,0.12)]
                 group
              "
            >
              <span>Find Your Plant Friend</span>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
  
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:-rotate-45"
                />
              </div>
            </motion.button>
            <button
              className="
                h-[48px]
                px-10
                rounded-full
                border
                border-[#DCDCDC]
                bg-transparent
                text-plant-forest
                font-medium
                text-base
                hover:bg-plant-forest/5
              "
            >
              Explore
            </button>
          </motion.div>

        </div>
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
          <div
            className="
              absolute
              w-[85vw] h-[85vw]
              lg:w-[900px] lg:h-[900px]
              rounded-full
              bg-[#EAF2E6]
              -z-10
              lg:right-[-430px]
              lg:-translate-y-[90px]
              lg:translate-x-[160px]
            "
          />
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={planetHand}
            srcSet={`${planetHandMobile} 300w, ${planetHand} 700w`}
            sizes="(max-width: 768px) 300px, 700px"
            alt="Monstera Plant in hand"
            width={700}
            height={709}
            fetchPriority="high"
            className="
              relative
              z-10
              w-[80vw] max-w-[380px]
              lg:w-[700px] lg:max-w-none
              h-auto
              aspect-[700/709]
              object-contain
              lg:object-right
              lg:-mr-[190px]
            "
          />
        </div>
      </div>
    </section>
  );
}