"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuItems = [
    { title: "ACCUEIL", href: "/", color: "from-cyan-400 to-blue-500" },
    { title: "LINEUP", href: "/lineup", color: "from-pink-400 to-rose-500" },
    { title: "ÉDITIONS 1 & 2", href: "/editions", color: "from-purple-400 to-indigo-500" },
    { title: "CONTACT", href: "/contact", color: "from-yellow-400 to-orange-500" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16 lg:h-16" : "h-20 lg:h-24"
        }`}>
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-50 -mt-2 cursor-pointer"
              >
                <div className={`relative transition-all duration-300 ${
                  scrolled ? "w-12 h-12 lg:w-14 lg:h-14" : "w-14 h-14 lg:w-20 lg:h-20"
                }`}>
                  <Image
                    src="/logo.png"
                    alt="Nostalgia Lovers"
                    fill
                    className="object-contain filter drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Burger Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="flex flex-col items-end gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8, width: 32 } : { rotate: 0, y: 0, width: 32 }}
                  className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, width: 24 } : { opacity: 1, width: 24 }}
                  className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8, width: 32 } : { rotate: 0, y: 0, width: 20 }}
                  className="h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                />
              </div>
              <span className="absolute -inset-4 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-black via-purple-950 to-black"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              />
            </div>

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8 lg:px-16">
              {/* Menu Items */}
              <div className="flex flex-col items-center gap-4 lg:gap-6 mb-12">
                {menuItems.map((item, index) => (
                  <Link key={item.title} href={item.href}>
                    <motion.div
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: [0.65, 0, 0.35, 1],
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="group relative text-center cursor-pointer"
                    >
                      <div className="relative overflow-hidden">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black font-[Montserrat] text-white tracking-tight">
                          {item.title}
                        </h2>
                        
                        {/* Gradient Overlay on Hover */}
                        <motion.div
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className={`absolute inset-0 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black font-[Montserrat] tracking-tight">
                            {item.title}
                          </h2>
                        </motion.div>
                      </div>
                      
                      {/* Underline Effect */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        className={`h-1 bg-gradient-to-r ${item.color} mt-2 rounded-full mx-auto`}
                      />
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://guichet.com/ma-fr/event/concerts/nostalgia-lovers-blind-pass-3-soirees-5536"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-5 text-xl lg:text-2xl font-black font-[Montserrat] text-black bg-white rounded-full overflow-hidden group"
              >
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-cyan-500 transition-all duration-300">ACHETER BILLETS</span>
              </motion.a>

              {/* Social Links / Extra Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-10 left-8 lg:left-16 text-white/60 text-sm lg:text-base font-[Montserrat]"
              >
                <p>18–20 JUIN 2026</p>
                <p className="text-white/40">Casablanca, Morocco</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-10 right-8 lg:right-16 text-white/60 text-sm lg:text-base font-[Montserrat] text-right"
              >
                <p>NOSTALGIA LOVERS</p>
                <p className="text-white/40">Festival 2026</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}