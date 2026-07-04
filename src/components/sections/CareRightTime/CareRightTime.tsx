import { HangingPlant } from './HangingPlant';

import springSeasonIcon from '@/assets/sun.svg'; 
import summerSeasonIcon from '@/assets/sun.svg';
import autumnSeasonIcon from '@/assets/leaf.svg';
import winterSeasonIcon from '@/assets/cloud-snow.svg';
import dropletIcon from '@/assets/droplet.svg';
import fertilizerIcon from '@/assets/leaf.svg';
import sunIcon from '@/assets/sun.svg';
import windIcon from '@/assets/wind.svg';
import shieldIcon from '@/assets/shield.svg';
import scissorsIcon from '@/assets/scissors.svg';
import thermoIcon from '@/assets/thermometer.svg';
import moonIcon from '@/assets/moon.svg';

interface SeasonData {
  id: string;
  name: string;
  months: string;
  icon: string;
  themeColor: string;      
  badgeIconColor: string;  
  bgThemeClass: string;
  badges: { text: string; icon: string }[];
}

const SEASONS_CARE_DATA: SeasonData[] = [
  {
    id: 'spring',
    name: 'Spring',
    months: 'March—May',
    icon: springSeasonIcon,
    themeColor: '#346E3C',
    badgeIconColor: '#10B981',
    bgThemeClass: 'bg-[#39BB4B]/[0.08]',
    badges: [
      { text: 'Water every 3 days', icon: dropletIcon },
      { text: 'Add fertilizer', icon: fertilizerIcon },
      { text: 'Move to bright light', icon: sunIcon },
    ],
  },
  {
    id: 'summer',
    name: 'Summer',
    months: 'June—August',
    icon: summerSeasonIcon,
    themeColor: '#F59E0B',
    badgeIconColor: '#F59E0B',
    bgThemeClass: 'bg-[#FAEFC4]',
    badges: [
      { text: 'Water daily', icon: dropletIcon },
      { text: 'Increase air circulation', icon: windIcon },
      { text: 'Protect from heat', icon: shieldIcon },
    ],
  },
  {
    id: 'autumn',
    name: 'Autumn',
    months: 'September—November',
    icon: autumnSeasonIcon,
    themeColor: '#F97316',
    badgeIconColor: '#F97316',
    bgThemeClass: 'bg-[#FAE8D1]',
    badges: [
      { text: 'Reduce watering', icon: dropletIcon },
      { text: 'Prune old growth', icon: scissorsIcon },
      { text: 'Watch temperature', icon: thermoIcon },
    ],
  },
  {
    id: 'winter',
    name: 'Winter',
    months: 'December—February',
    icon: winterSeasonIcon,
    themeColor: '#6366F1',
    badgeIconColor: '#6366F1',
    bgThemeClass: 'bg-[#DCE2FA]',
    badges: [
      { text: 'Water sparingly', icon: dropletIcon },
      { text: 'Reduce light', icon: moonIcon },
      { text: 'Protect from drafts', icon: shieldIcon },
    ],
  },
];

export const CareRightTime = () => {
  return (
    <section className="relative w-full flex justify-center px-4 lg:px-[64px] mb-24 lg:mb-[180px] max-w-7xl mx-auto">
      <div
        className="
          relative 
          w-full 
          mx-auto
          min-h-[371px] 
          bg-[#39BB4B]/[0.06] 
          rounded-[32px] 
          px-6 lg:px-[64px] 
          py-8 lg:py-[48px] 
          flex 
          flex-col 
          gap-[24px] 
        "
      >
        <div className="flex flex-col gap-[8px] relative z-10 select-none">
          <h2 className="font-tomorrow font-bold
              text-[32px] text-[#1F1F1F]/[0.88]   tracking-tight m-0 leading-tight">
            Care at the Right Time
          </h2>
          <p className="text-[#1F1F1F]/[0.66] text-[16px] font-medium m-0">
            Know exactly when to water, feed, and repot
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full relative z-10 mt-[8px]">
          {SEASONS_CARE_DATA.map((season) => (
            <div key={season.id} className="flex flex-col items-start gap-[16px]">
              
              <div className="flex items-center gap-[12px]">
                <div className={`w-[40px] h-[40px] rounded-[20px] flex items-center justify-center shrink-0 ${season.bgThemeClass}`}>
                  <div 
                    className="w-[20px] h-[20px]"
                    style={{
                      backgroundColor: season.themeColor,
                      WebkitMaskImage: `url("${season.icon}")`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'center',
                      WebkitMaskRepeat: 'no-repeat',
                      maskImage: `url("${season.icon}")`,
                      maskSize: 'contain',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat',
                    }}
                  />
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-[#1F1F1F]/[0.88] font-semibold text-[18px] m-0 leading-none">
                    {season.name}
                  </h3>
                  <span className="text-[#1F1F1F]/[0.45] text-[12px] font-medium mt-[4px]">
                    {season.months}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-[12px] w-full p-0 m-0 list-none">
                {season.badges.map((badge, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center gap-[8px] bg-white rounded-full px-[12px] py-[8px] w-fit border border-[#000000]/[0.06]"
                  >
                    <div 
                      className="w-[16px] h-[16px] shrink-0"
                      style={{
                        backgroundColor: season.badgeIconColor,
                        WebkitMaskImage: `url("${badge.icon}")`,
                        WebkitMaskSize: 'contain',
                        WebkitMaskPosition: 'center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskImage: `url("${badge.icon}")`,
                        maskSize: 'contain',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                      }}
                    />
                    <span className="text-[#1F1F1F]/[0.88] text-[12px] font-medium whitespace-nowrap">
                      {badge.text}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        <HangingPlant />

      </div>
    </section>
  );
};