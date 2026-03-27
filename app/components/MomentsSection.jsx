"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const MomentsSection = () => {
  const [activeEdition, setActiveEdition] = useState('2025');

  const editions = {
    2025: {
      subtitle: "Édition 2025",
      description: "Nostalgia Lovers Festival 2025 a été une aventure musicale légendaire ! Des performances exceptionnelles, des légendes des années 80 et 90, et un public en délire ont créé des souvenirs inoubliables. Merci à tous d'avoir fait de cette édition un moment historique.",
      images: [
        { src: "/moment20251.webp", alt: "Nostalgia Lovers Festival 2025 Moment 1" },
        { src: "/moment20252.avif", alt: "Nostalgia Lovers Festival 2025 Moment 2" },
        { src: "/moment20253.webp", alt: "Nostalgia Lovers Festival 2025 Moment 3" }
      ],
    },
    2024: {
      subtitle: "Édition 2024",
      description: "Nostalgia Lovers Festival 2024 a été une aventure musicale inoubliable. Des performances légendaires, des artistes exceptionnels, et un public passionné ont rendu chaque instant unique. Merci à tous d'avoir fait de cette édition un succès.",
      images: [
        { src: "/moment1.webp", alt: "Nostalgia Lovers Festival 2024 Moment 1" },
        { src: "/moment2.webp", alt: "Nostalgia Lovers Festival 2024 Moment 2" },
        { src: "/moment3.webp", alt: "Nostalgia Lovers Festival 2024 Moment 3" }
      ],
    }
  };

  const currentEdition = editions[activeEdition];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">

      {/* Decorative blobs — same as Spotify section */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEdition}
            className="grid grid-cols-2 grid-rows-2 gap-4 order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="col-span-1 row-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={currentEdition.images[0].src}
                alt={currentEdition.images[0].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              className="col-span-1 row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src={currentEdition.images[1].src}
                alt={currentEdition.images[1].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              className="col-span-1 row-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src={currentEdition.images[2].src}
                alt={currentEdition.images[2].alt}
                className="w-full h-full object-cover rounded-lg shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Text Content */}
        <motion.div
          className="flex flex-col justify-center space-y-8 order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <motion.span
              className="inline-block text-orange-600 font-medium tracking-wider text-sm uppercase font-[Montserrat]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nos Éditions
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black font-[Montserrat] bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              LES MEILLEURS MOMENTS
            </h2>
          </div>

          {/* Edition Toggle */}
          <div className="flex justify-start">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-lg flex gap-1">
              {Object.keys(editions).map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveEdition(year)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 font-[Montserrat] ${
                    activeEdition === year
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg scale-105'
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeEdition}
              className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {currentEdition.description}
            </motion.p>
          </AnimatePresence>

          <Link href="/editions">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(249, 115, 22, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-white text-lg font-black font-[Montserrat] self-start bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 transition-all duration-300 shadow-lg"
            >
              Revivre l'Édition {activeEdition}
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default MomentsSection;