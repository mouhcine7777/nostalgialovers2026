"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Utensils, Gamepad2, Camera, Sparkles } from "lucide-react";

export default function EditionsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const zones = [
    {
      title: "FOOD COURT",
      icon: Utensils,
      description: "Burgers, pizzas, snacks et bien plus… De quoi reprendre des forces entre deux shows et profiter de chaque instant du festival !",
      image: "/foodcourt.webp",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
      title: "GAMING ZONE",
      icon: Gamepad2,
      description: "Un espace fun pour petits et grands, idéal pour une pause en famille ou entre amis avant de retrouver l'ambiance du festival.",
      image: "/gamingzone.webp",
      gradient: "from-orange-600 via-red-500 to-amber-500",
    },
    {
      title: "ESPACES INSTAGRAMMABLES",
      icon: Camera,
      description: "Chaque coin du festival a son ambiance propre, trouvez le vôtre, capturez votre moment et laissez les photos raconter votre soirée.",
      image: "/instagramspace.webp",
      gradient: "from-amber-500 via-orange-500 to-red-500",
    },
    {
      title: "ZEN CORNER",
      icon: Sparkles,
      description: "Un espace calme pour savourer un café, discuter ou vous relaxer, parfait pour reprendre des forces en toute tranquillité.",
      image: "/zencorner.webp",
      gradient: "from-yellow-500 via-amber-500 to-orange-500",
    },
  ];

  return (
    <div ref={containerRef} style={{ backgroundColor: '#1a0a00' }} className="min-h-screen">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,4,0,0.4), #1a0a00)' }}
          />
          <Image
            src="/gallery/gallery10.webp"
            alt="Nostalgia Lovers Éditions 1 & 2"
            fill
            className="object-cover brightness-75"
            priority
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div
              className="inline-flex items-center gap-3 backdrop-blur-xl border border-orange-500/30 rounded-full px-6 py-3"
              style={{ backgroundColor: 'rgba(255,107,0,0.1)' }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-white/90 font-[Montserrat] font-semibold text-sm tracking-widest">
                ÉDITIONS PRÉCÉDENTES
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-[Montserrat] mb-6"
          >
            <span
              className="block text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
            >
              ÉDITIONS
            </span>
            <span className="block text-white -mt-4">
              1 & 2
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/70 font-[Montserrat] font-light max-w-3xl mb-12"
          >
            Deux années{' '}
            <span
              className="font-bold text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
            >
              inoubliables
            </span>{' '}
            de nostalgie, de musique et de moments magiques
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/60 text-sm font-[Montserrat] uppercase tracking-widest">
                Découvrir
              </span>
              <div className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomDelay = Math.random() * 3;
            const randomDuration = Math.random() * 5 + 5;
            const randomScale = Math.random() * 0.5 + 0.5;
            const randomRepeatDelay = Math.random() * 2;
            return (
              <motion.div
                key={i}
                initial={{ x: `${randomX}vw`, y: '100vh', scale: randomScale, opacity: 0 }}
                animate={{ y: '-100px', opacity: [0, 0.6, 0] }}
                transition={{ duration: randomDuration, delay: randomDelay, repeat: Infinity, repeatDelay: randomRepeatDelay }}
                className="absolute w-2 h-2 rounded-full blur-sm"
                style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
              />
            );
          })}
        </div>
      </section>

      {/* ZONES */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1a0a00' }}>

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,107,0,0.8) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.3), rgba(251,191,36,0.2))' }}
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.2), rgba(249,115,22,0.3))' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-orange-500" />
              <span className="text-orange-500 text-xs tracking-[0.4em] uppercase font-bold font-[Montserrat]">
                Festival
              </span>
              <div className="h-px w-10 bg-orange-500" />
            </div>

            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[Montserrat] text-transparent bg-clip-text mb-6"
              style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
            >
              NOS ZONES
            </h2>

            <p className="text-xl md:text-2xl font-[Montserrat] text-white/60 max-w-3xl mx-auto">
              Explorez les différents univers qui ont fait le succès de Nostalgia Lovers
            </p>
          </motion.div>

          {/* Zones grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {zones.map((zone, index) => (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-orange-500/10">
                  <div className="absolute inset-0">
                    <Image
                      src={zone.image}
                      alt={zone.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                    <div className="mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${zone.gradient} shadow-2xl transform group-hover:scale-110 transition-all duration-500`}
                        style={{ boxShadow: '0 8px 32px rgba(249,115,22,0.3)' }}
                      >
                        <zone.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black font-[Montserrat] text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] transform group-hover:translate-x-2 transition-transform duration-500">
                      {zone.title}
                    </h3>

                    <p className="text-base lg:text-lg font-[Montserrat] text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      {zone.description}
                    </p>

                    <div
                      className={`mt-6 h-1 rounded-full bg-gradient-to-r ${zone.gradient}`}
                      style={{ width: '6rem' }}
                    />
                  </div>

                  <div className="absolute inset-0 border-4 border-orange-500/0 group-hover:border-orange-500/30 rounded-3xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <p className="text-xl md:text-2xl font-[Montserrat] text-white/70 mb-8">
              Prêt à vivre cette expérience en{' '}
              <span
                className="font-bold text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
              >
                2026
              </span>{' '}
              ?
            </p>
            <motion.a
              href="https://guichet.com/ma-fr/event/concerts/iconic-pass-3-soirees-5995"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(249,115,22,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 text-xl lg:text-2xl font-black font-[Montserrat] text-white rounded-full shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
            >
              RÉSERVER MAINTENANT
            </motion.a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}