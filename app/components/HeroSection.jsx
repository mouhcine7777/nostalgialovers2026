"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const ticketUrl = "https://guichet.com/ma-fr/event/concerts/nostalgia-lovers-blind-pass-3-soirees-5536";

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <video
          muted
          playsInline
          autoPlay
          loop
          className="w-full h-full object-cover brightness-50"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/nostalgia-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 -mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 select-none pointer-events-none"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        >
          <Image
            src="/blindpass.png"
            alt="Blind Pass"
            width={400}
            height={400}
            className="w-64 sm:w-80 md:w-96 h-auto drop-shadow-2xl select-none pointer-events-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
              pointerEvents: "none",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-yellow-400 font-[Montserrat]">
            18–20 JUIN 2026
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-white font-[Montserrat] mb-8 max-w-2xl px-4"
        >
          Réservez vos billets Blind Pass et vivez l&apos;expérience ultime du retour aux années 80 &amp; 90 !
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold font-[Montserrat] text-lg sm:text-xl md:text-2xl px-8 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            ACHETEZ VOS BILLETS
          </a>
        </motion.div>
      </div>

      <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="block absolute bottom-0 left-0 right-0 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 py-3 overflow-hidden cursor-pointer hover:from-purple-900 hover:via-purple-700 hover:to-purple-900 transition-all duration-300"
        >
          <motion.div
            className="flex w-fit"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center whitespace-nowrap flex-shrink-0">
                <span className="text-white font-bold font-[Montserrat] text-base sm:text-lg md:text-xl">
                  BLIND PASS DISPONIBLES MAINTENANT
                </span>
                <span className="text-yellow-300 font-extrabold font-[Montserrat] text-base sm:text-lg md:text-xl bg-purple-900 px-3 py-1 rounded-lg ml-2 mr-4">
                Quantité limitée 🔥
                </span>
                <div className="w-[25px] sm:w-[40px] md:w-[200px] flex-shrink-0" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </a>
    </section>
  );
}