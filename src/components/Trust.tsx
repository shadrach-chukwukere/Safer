import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import image1 from "../assets/image 602.png";
import image2 from "../assets/image 604.png";
import image3 from "../assets/image 603.png";

export default function Trust() {
  const cards = [
    { id: 1, title: "Competitive exchange rates.", image: image1 },
    { id: 2, title: "Zero account maintenance charges", image: image3 },
    { id: 3, title: `IBAN for your business needs.`, image: image2 },
  ];

  return (
    <div className="lg:mx-10 md:mx-8 px-2 md:px-0 py-6 font-Righteous">
      {/* Swiper for screens < 1024 */}
      <div className="block lg:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2} // show a bit of next slide
          centeredSlides={false}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={card.id}
              className="flex justify-start max-w-[100%]"
            >
              <div className="bg-[#080707] text-white md:py-10 py-5 sm:px-8 px-5 space-y-4 rounded-3xl h-full w-full">
                <div className="xl:text-[30px] lg:text-[25px] md:text-[20px] text-[18px] font-semibold text-left">
                  {card?.title}
                </div>
                <div className="w-full flex justify-between items-end">
                  <div className="text-[40px] md:px-6 px-3 text-white/20 font-semibold">
                    -{index + 1}
                  </div>
                  <img
                    src={card.image}
                    alt={card.title.replace(/<br\/>/g, " ")}
                    className="w-[160px] h-[160px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Static grid for screens ≥ 1024 */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="bg-[#080707] relative text-white py-10 px-8 space-y-4 rounded-3xl h-full w-full"
          >
            <div
              className="xl:text-[30px] lg:text-[25px] md:text-[20px] text-[25px] font-semibold text-left"
              dangerouslySetInnerHTML={{ __html: card.title }}
            ></div>
            <div className="w-full flex justify-end items-end">
              <div className="text-[45px] px-6 text-white/25 font-semibold absolute bottom-5 left-5">
                -{index + 1}
              </div>
              <img
                src={card.image}
                alt={card.title.replace(/<br\/>/g, " ")}
                className="w-[160px] h-[160px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
