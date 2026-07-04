import { motion } from 'framer-motion';

import plantPot from '@/assets/plant-pot.webp';
import vinesLeft from '@/assets/vines-left.webp';

export const HangingPlant = () => {
  return (
    <div 
      className="
        absolute 
        right-[32px] 
        top-[-10px] 
        w-[150px] 
        h-[303px] 
        pointer-events-none 
        hidden 
        lg:block 
        z-20
      "
    >
      
    

      <motion.img
        src={plantPot}
        alt="Hanging plant in a pot reacting to air movement"
        className="absolute top-3 left-16 inset-0 w-full h-full object-contain object-top z-10"
        style={{ transformOrigin: 'top center' }}
        animate={{ 
          rotate: [-0.3, 0.3, -0.3] 
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.img
        src={vinesLeft}
        alt=""
        aria-hidden="true"
        className="absolute top-14 left-[77px]   z-20"
        style={{ transformOrigin: '20% 10%' }}
        animate={{ 
          rotate: [1.5, -1, 1.5],
          skewY: [0.1, -0.1, 0.1]
        }}
        transition={{
          duration: 4.8, 
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.3, 
        }}
      />

    </div>
  );
};