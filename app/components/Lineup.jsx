"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const artistData = {
  '18 Juin': [
    { name: 'GLORIA GAYNOR', image: '/18juin/gloriagaynor.webp' },
    { name: 'BLACKSTREET', image: '/18juin/blackstreet.webp' },
    { name: 'BLU CANTRELL', image: '/18juin/blucantrell.webp' },
    { name: 'SANDRA', image: '/18juin/sandra.webp' },
  ],
  '19 Juin': [
    { name: 'EARTH, WIND & FIRE EXPERIENCE BY AL MCKAY', image: '/19juin/ewf.webp' },
    { name: 'ICE MC', image: '/19juin/icemc.webp' },
    { name: 'WILLY WILLIAM', image: '/19juin/willywilliam.webp' },
    { name: 'PARADISIO', image: '/19juin/paradisio.webp' },
    { name: 'KAOMA', image: '/19juin/kaoma.webp' },
  ],
  '20 Juin': [
    { name: 'VILLAGE PEOPLE', image: '/20juin/villagepeople.webp' },
    { name: 'TAG TEAM', image: '/20juin/tagteam.webp' },
    { name: 'DANTE THOMAS', image: '/20juin/dantethomas.webp' },
    { name: 'CECE PENISTON', image: '/20juin/cecepeniston.webp' },
    { name: 'DJ CUT KILLER', image: '/20juin/cutkiller.webp' },
    { name: 'THE WEATHER GIRLS', image: '/20juin/weathergirls.webp' },
  ],
};

const dateToId = (date) => date.toLowerCase().replace(/\s+/g, '-');

const SLIDES_PER_VIEW_LG = 4;

export default function LineupSection() {
  const [activeDay, setActiveDay] = useState('18 Juin');

  const currentArtists = artistData[activeDay];
  const needsNavOnDesktop = currentArtists.length > SLIDES_PER_VIEW_LG;

  return (
    <section className="py-12 md:py-20 relative" style={{ backgroundColor: '#1a0a00' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(251,146,60,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.06) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl md:text-6xl font-black text-center mb-4 md:mb-6 font-[Montserrat]"
        style={{ color: '#FFFFFF' }}
      >
        LINE-UP 2026
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mb-6 md:mb-8 h-1 w-24 rounded-full"
        style={{ background: 'linear-gradient(90deg, #f97316, #fbbf24)' }}
      />

      <p
        className="relative text-base md:text-lg text-center mb-8 md:mb-12 font-[Montserrat] font-light px-4"
        style={{ color: 'rgba(255,255,255,0.75)' }}
      >
        Trois nuits, des légendes vivantes — votre été commence ici.
      </p>

      {/* Day tabs */}
      <div
        className="relative flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8 md:mb-16 px-4"
        role="tablist"
        aria-label="Select performance day"
      >
        {Object.keys(artistData).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            role="tab"
            aria-selected={activeDay === day}
            aria-controls={`panel-${dateToId(day)}`}
            id={`tab-${dateToId(day)}`}
            className={`relative px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-xl font-[Montserrat] font-bold transition-all duration-300 ease-in-out overflow-hidden
              ${
                activeDay === day
                  ? 'text-white shadow-[0px_4px_20px_rgba(249,115,22,0.55)] scale-105'
                  : 'bg-transparent border-2 text-white hover:scale-105'
              }`}
            style={
              activeDay === day
                ? { background: 'linear-gradient(135deg, #f97316, #fbbf24)' }
                : { borderColor: '#f97316', backdropFilter: 'blur(10px)' }
            }
          >
            {day}
          </button>
        ))}
      </div>

      {/* Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="relative px-4 md:px-12"
          role="tabpanel"
          id={`panel-${dateToId(activeDay)}`}
          aria-labelledby={`tab-${dateToId(activeDay)}`}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={needsNavOnDesktop}
            navigation={{
              prevEl: '.custom-nav-prev',
              nextEl: '.custom-nav-next',
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="lineup-slider"
          >
            {currentArtists.map((artist, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="aspect-[3/4] rounded-xl overflow-hidden group relative shadow-md"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-full">
                    <img
                      src={artist.image}
                      alt={`${artist.name} - Performance artist`}
                      className="w-full h-full object-cover"
                    />

                    {/* Logo — centered top */}
                    <div className="absolute top-4 left-0 right-0 flex justify-center">
                      <img
                        src="logo.png"
                        alt="Festival logo"
                        className="w-20 h-20 object-contain"
                      />
                    </div>

                    {/* Base gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {/* Hover orange overlay */}
                    <div
                      className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        top: '70%',
                        background:
                          'linear-gradient(to top, rgba(234,88,12,0.85), rgba(251,191,36,0.5), transparent)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Artist name */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg sm:text-xl font-bold text-white text-center font-[Montserrat] leading-tight">
                        {artist.name}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav — always shown on mobile/tablet, hidden on lg when not needed */}
          <div className={`flex justify-between items-center mt-8 ${!needsNavOnDesktop ? 'lg:hidden' : ''}`}>
            <div className="custom-pagination flex-grow" role="navigation" aria-label="Slides" />
            <div className="flex items-center gap-3">
              <button
                className="custom-nav-prev transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" />
              </button>
              <button
                className="custom-nav-next transition-all duration-200 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)' }}
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ffffff;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
          .custom-pagination .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #f97316;
          opacity: 1;
          transform: scale(1.2);
        }
        .custom-nav-prev:hover,
        .custom-nav-next:hover {
          box-shadow: 0 0 18px rgba(249, 115, 22, 0.45);
        }
      `}</style>
    </section>
  );
}