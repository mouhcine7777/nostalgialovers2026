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
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
    {
      title: "GAMING ZONE",
      icon: Gamepad2,
      description: "Un espace fun pour petits et grands, idéal pour une pause en famille ou entre amis avant de retrouver l'ambiance du festival.",
      image: "/gamingzone.webp",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
    },
    {
      title: "ESPACES INSTAGRAMMABLES",
      icon: Camera,
      description: "Chaque coin du festival a son ambiance propre, trouvez le vôtre, capturez votre moment et laissez les photos raconter votre soirée.",
      image: "/instagramspace.webp",
      gradient: "from-pink-500 via-purple-500 to-indigo-500",
    },
    {
      title: "ZEN CORNER",
      icon: Sparkles,
      description: "Un espace calme pour savourer un café, discuter ou vous relaxer, parfait pour reprendre des forces en toute tranquillité.",
      image: "/zencorner.webp",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
    },
  ];

  return (
    <div ref={containerRef} className="bg-[#1a0b2e] min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-[#1a0b2e] z-10" />
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
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-white/90 font-[Montserrat] font-semibold text-sm tracking-widest">
                ÉDITIONS PRÉCÉDENTES
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-[Montserrat] mb-6"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
              ÉDITIONS
            </span>
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] -mt-4">
              1 & 2
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/80 font-[Montserrat] font-light max-w-3xl mb-12"
          >
            Deux années <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">inoubliables</span> de nostalgie, de musique et de moments magiques
          </motion.p>

          {/* Scroll Indicator */}
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
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements - FIXED for SSR */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(20)].map((_, i) => {
            const randomX = Math.random() * 100; // Use percentage instead of window.innerWidth
            const randomDelay = Math.random() * 3;
            const randomDuration = Math.random() * 5 + 5;
            const randomScale = Math.random() * 0.5 + 0.5;
            const randomRepeatDelay = Math.random() * 2;
            
            return (
              <motion.div
                key={i}
                initial={{
                  x: `${randomX}vw`,
                  y: '100vh',
                  scale: randomScale,
                  opacity: 0,
                }}
                animate={{
                  y: '-100px',
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: randomDuration,
                  delay: randomDelay,
                  repeat: Infinity,
                  repeatDelay: randomRepeatDelay,
                }}
                className="absolute w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-sm"
              />
            );
          })}
        </div>
      </section>

      {/* Zones Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#1a0b2e]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[Montserrat] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-6">
                NOS ZONES
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl font-[Montserrat] text-white/70 max-w-3xl mx-auto"
            >
              Explorez les différents univers qui ont fait le succès de Nostalgia Lovers
            </motion.p>
          </motion.div>

          {/* Zones Grid */}
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
                <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={zone.image}
                      alt={zone.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${zone.gradient} shadow-2xl transform group-hover:scale-110 transition-all duration-500`}>
                        <zone.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black font-[Montserrat] text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] transform group-hover:translate-x-2 transition-transform duration-500">
                      {zone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base lg:text-lg font-[Montserrat] text-white/95 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
                      {zone.description}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                      className={`mt-6 h-1 w-24 bg-gradient-to-r ${zone.gradient} rounded-full origin-left group-hover:w-32 transition-all duration-500`}
                    />
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-500 pointer-events-none" />
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
            <p className="text-xl md:text-2xl font-[Montserrat] text-white/80 mb-8">
              Prêt à vivre cette expérience en <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">2026</span> ?
            </p>
            <a
              href="https://guichet.com/ma-fr/event/concerts/nostalgia-lovers-blind-pass-3-soirees-5536"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-10 py-5 text-xl lg:text-2xl font-black font-[Montserrat] text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">RÉSERVER MAINTENANT</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          />
        </div>
      </section>
    </div>
  );
}