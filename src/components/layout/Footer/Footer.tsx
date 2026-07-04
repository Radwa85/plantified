import xIcon from '@/assets/XIcon.svg'; 
import whatsappIcon from '@/assets/WhatsIcon.svg';
import instagramIcon from '@/assets/InstgramIcon.svg';

const SOCIAL_LINKS = [
  { label: 'X (Twitter)', icon: xIcon },
  { label: 'WhatsApp', icon: whatsappIcon },
  { label: 'Instagram', icon: instagramIcon },
];

export const Footer = () => {
  return (
    <footer
      className="bg-plant-footer border-t border-white/5 px-4 lg:px-[64px] py-4"
    >
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/[0.8] text-[14px] font-medium">
          © {new Date().getFullYear()} Plantified, Grown with care.
        </p>

        <nav aria-label="Social media links">
          <ul className="flex items-center gap-1" role="list">
            {SOCIAL_LINKS.map(({ label, icon }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="text-white/80 hover:text-white/80 transition-colors w-8 h-8 flex items-center justify-center"
                >
                  <div 
                    className="w-[20px] h-[20px] bg-current" 
                    style={{
                      WebkitMaskImage: `url("${icon}")`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskPosition: 'center',
                      WebkitMaskRepeat: 'no-repeat',
                      maskImage: `url("${icon}")`,
                      maskSize: 'contain',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat',
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};