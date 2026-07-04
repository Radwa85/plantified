import categoriesBg from '@/assets/categories-bg.webp';
import categoriesPlanet from '@/assets/categories-planet.webp';

import ivyImg from '@/assets/ivy.webp';
import mintImg from '@/assets/mint.webp';
import spikeImg from '@/assets/spike.webp';

interface CategoryProduct {
  id: number;
  price: string;
  title: string;
  subtitle: string;
  image: string;
}

const CATEGORY_PRODUCTS: CategoryProduct[] = [
  {
    id: 1,
    price: '24.99$',
    title: 'Always you Busy?',
    subtitle: 'Meet Ivy',
    image: ivyImg,
  },
  {
    id: 2,
    price: '5.99$',
    title: 'Need for inspiration?',
    subtitle: 'Meet mint',
    image: mintImg,
  },
  {
    id: 3,
    price: '16.99$',
    title: 'Always on the move?',
    subtitle: 'Meet Spike',
    image: spikeImg,
  },
];

export const ProductCategories = () => {
  return (
    <section className="relative w-full px-4 lg:px-[64px] mt-32 lg:mt-[350px]">

      <div className="relative min-h-[340px] w-full max-w-7xl mx-auto overflow-visible">
        <img
          src={categoriesBg}
          alt=""
          aria-hidden
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            pointer-events-none
            z-0
          "
          loading="lazy"
        />

        <img
          src={categoriesPlanet}
          alt=""
          aria-hidden
          className="
            absolute
            top-[76px]
            left-[-24px]
            w-[107px]
            h-[264px]
            object-contain
            pointer-events-none
            z-10
          "
          loading="lazy"
        />
        <div
          className="
            relative
            z-20
            flex
            flex-wrap
            justify-center
            gap-[24px]
            lg:-translate-y-[176px]
            -translate-y-16
          "
        >
          {CATEGORY_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="
                group
                cursor-pointer
                w-[265px]
                h-[352px]
                bg-[#FCFBF9]
                rounded-[12px]
                border
                border-[#0000000F]
                p-[14px]
                flex
                flex-col
                shrink-0
              "
            >
              <div className="relative overflow-hidden rounded-[12px] flex-1">
                <div
                  className="
                    absolute
                    top-[12px]
                    left-[8px]
                    bg-[#346E3C]
                    rounded-full
                    border
                    border-[#FFFFFF3D]
                    px-[14px]
                    py-[6px]
                    text-white
                    text-[14px]
                    font-semibold
                    z-10
                  "
                >
                  {product.price}
                </div>

                <img
                  src={product.image}
                  alt={product.subtitle}
                  className="
                    w-full
                    h-full
                    rounded-[12px]
                    object-cover
                    transform
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.2]
                  "
                  loading="lazy"
                />
              </div>

              <div className="mt-[8px] flex flex-col">
                <p
                  className="
                    text-[18px]
                    font-medium
                    text-[#1F1F1FE0]
                  "
                >
                  {product.title}
                </p>

                <h3
                  className="
                    text-[#1F1F1FE0]
                    text-[18px]
                    font-medium
                    font-poppins
                  "
                >
                  {product.subtitle}
                </h3>

                <button
                  className="
                    mt-[4px]
                    text-[#346E3C]
                    text-[14px]
                    font-medium
                    text-left
                  "
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
        <div
          className="
            relative
            z-20
            flex
            justify-center
            text-center
            lg:-mt-[90px]
            mt-0
            pb-8
          "
        >
          <p
            className="
              max-w-[620px]
              text-[16px]
              leading-[28px]
              font-medium
              font-poppins
              text-[#346E3CCC]
            "
          >
            Different plants, Different personalities.
            <br />
            Find the one that feels most like you.
          </p>
        </div>

      </div>
    </section>
  );
};