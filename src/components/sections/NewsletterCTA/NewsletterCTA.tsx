import React from 'react';
import newsPlanetBg from '@/assets/news-planet.webp'; 

export const NewsletterCTA = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full flex justify-center px-4 lg:px-[64px] mb-12 lg:mb-[74px] max-w-7xl mx-auto">
      <div 
        className="
          relative 
          w-full 
          min-h-[232px]
          bg-[#363D37] 
          rounded-[24px] 
          flex 
          flex-col 
          items-center 
          justify-center 
          py-[32px] 
          px-[20px] md:px-[32px]
          overflow-hidden
        "
      >
                <div 
          className="absolute right-[5%] md:right-[19%] top-0 bottom-0 w-[150px] md:w-[240px]  pointer-events-none bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${newsPlanetBg})`, 
            backgroundSize: 'contain'
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-[24px] w-full max-w-[850px] text-center">
    
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-white/[0.88] font-medium text-[16px] md:text-[20px]">
              Find the plant that grows with you.
            </h2>
            <p className="text-white/[0.66] text-[14px] md:text-[18px] font-regular">
              Join 50,000+ urban dwellers who have rediscovered the joy of quiet growth. Delivered with care, straight to your door.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit}
            className="flex flex-wrap items-center gap-[8px] w-full max-w-[425px]"
          >
            <input
              type="email"
              placeholder="Enter your email here"
              required
              className="
                flex-1 
                h-[48px] 
                bg-white/[0.12] 
                border border-white/[0.12] 
                rounded-[24px] 
                px-[24px] 
                text-white/[0.88] 
                placeholder:text-white/[0.44] 
                outline-none 
                transition-all
              "
            />
            <button
              type="submit"
              className="
                h-[48px] 
                px-[32px] 
                bg-[#D3D4D3] 
                text-[#346E3C] 
                font-medium 
                text-[16px] 
                rounded-[24px] 
                transition-colors 
              "
            >
              Send
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
};