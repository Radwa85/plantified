import React from 'react'; 

import packageIcon from '@/assets/package.svg';
import dropletIcon from '@/assets/rain.svg';
import leafIcon from '@/assets/routine.svg';
import plantGrowIcon from '@/assets/plant_grow.svg';
import arrowStep1 from '@/assets/arrow-step.webp'; 
import arrowStep2 from '@/assets/arrow-step2.webp';
import arrowStep3 from '@/assets/arrow-step-3.webp';

interface Step {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    icon: packageIcon,
    title: 'Unboxing',
    description: 'Let the leaves settle and acclimate to your light.',
  },
  {
    id: 2,
    icon: dropletIcon,
    title: 'First Mist',
    description: 'Apply a light moisture layer after 48 hours.',
  },
  {
    id: 3,
    icon: leafIcon,
    title: 'Routine',
    description: 'Establish a weekly cadence for feeding and care.',
  },
  {
    id: 4,
    icon: plantGrowIcon,
    title: 'Watch it grow',
    description: 'After a short time, your plant will love you because you take care of it.',
  },
];

export const CareSteps = () => {
  const ARROWS = [arrowStep1, arrowStep2, arrowStep3];

  return (
    <section className="relative w-full px-4 lg:px-[64px] py-16 lg:py-[200px] max-w-7xl mx-auto">
            <div 
        className="
          relative 
          w-full 
          flex 
          flex-col 
          items-center 
        "
      >
        
        <div className="relative flex items-center justify-center w-[360px] h-[26px] mb-[34px]">
          <div className="absolute inset-0 bg-[#39BB4B]/[0.12] rounded-[12px] w-[360px] h-[26px] z-0"></div>
                    <h2 className="relative z-10 text-[#346E3C] font-poppins font-medium text-[24px] -translate-y-[10px]">
            Small Care, Big Rewards
          </h2>
        </div>

  
        <div className="relative flex flex-row flex-wrap lg:flex-nowrap items-start justify-center gap-6 lg:gap-[60px] w-full mt-10 lg:mt-0">
          
          {STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              
              <article 
                className="flex flex-col items-center text-center w-[209px] shrink-0 gap-[8px]"
              >
                <div 
                  className="
                    w-[48px] 
                    h-[48px] 
                    flex 
                    items-center 
                    justify-center 
                    bg-[#39BB4B14] 
                    rounded-[12px] 
                  "
                >
                  <img src={step.icon} alt={step.title} className="w-[24px] h-[24px]" loading="lazy" />
                </div>

                <div className="flex flex-col items-center gap-[4px]">
                  <h3 className="text-[#1F1F1FE0] font-medium text-[20px] m-0">
                    {step.title}
                  </h3>
                  <p className="text-[#1F1F1FA3] text-[14px] font-medium leading-[24px] m-0">
                    {step.description}
                  </p>
                </div>
              </article>

              {index < 3 && (
                <div className="hidden lg:flex pt-[24px] shrink-0 h-[100px] w-[84px]">
                  <img 
                    src={ARROWS[index]} 
                    alt="" 
                    aria-hidden="true" 
                    className="w-auto h-auto object-contain" 
                    loading="lazy"
                  />
                </div>
              )}

            </React.Fragment>
          ))}
          
        </div>
      </div>
    </section>
  );
};