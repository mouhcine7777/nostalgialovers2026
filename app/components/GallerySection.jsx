"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const autoPlayRef = useRef(null);

  // Detect screen size and set slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { src: "/gallery/gallery1.webp", alt: "Festival atmosphere 1" },
    { src: "/gallery/gallery2.webp", alt: "Crowd enjoying music" },
    { src: "/gallery/gallery3.webp", alt: "Stage performance" },
    { src: "/gallery/gallery4.webp", alt: "Festival vibes" },
    { src: "/gallery/gallery5.webp", alt: "Night lights" },
    { src: "/gallery/gallery6.webp", alt: "Dancing crowd" },
    { src: "/gallery/gallery7.webp", alt: "Festival energy" },
    { src: "/gallery/gallery8.webp", alt: "Live performance" },
    { src: "/gallery/gallery9.webp", alt: "Festival memories" },
    { src: "/gallery/gallery10.webp", alt: "Stage view" },
    { src: "/gallery/gallery11.webp", alt: "Crowd celebration" },
    { src: "/gallery/gallery12.webp", alt: "Festival spirit" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleManualNavigation = (action) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative py-20 lg:py-32 bg-[#1a0b2e] overflow-hidden" id="gallery">
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[Montserrat] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 tracking-tight">
              ÉDITIONS PRÉCÉDENTES
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-[Montserrat] text-white/80 max-w-3xl mx-auto font-light"
          >
            Revivez les moments <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold">magiques</span> et l&apos;ambiance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">inoubliable</span> de nos festivals
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 h-1 w-32 mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"
          />
        </motion.div>

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Main Slider - Responsive */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-1 md:gap-2"
              animate={{
                x: slidesToShow === 1 
                  ? `calc(-${currentIndex * 100}% - ${currentIndex * 4}px)`
                  : `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (8 / 3)}px)`,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Duplicate last images at start for infinite loop */}
              {slidesToShow === 3 && images.slice(-3).map((image, index) => (
                <motion.div
                  key={`start-${index}`}
                  className="relative flex-shrink-0 w-[calc(100%/3-4px)] h-[250px] md:h-[320px] lg:h-[380px] rounded-md overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}

              {/* Main images */}
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative flex-shrink-0 ${
                    slidesToShow === 1 
                      ? 'w-[calc(100%-4px)]' 
                      : 'w-[calc(100%/3-4px)]'
                  } h-[250px] md:h-[320px] lg:h-[380px] rounded-md overflow-hidden group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={slidesToShow === 1 ? "100vw" : "450px"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}

              {/* Duplicate first images at end for infinite loop */}
              {slidesToShow === 3 && images.slice(0, 3).map((image, index) => (
                <motion.div
                  key={`end-${index}`}
                  className="relative flex-shrink-0 w-[calc(100%/3-4px)] h-[250px] md:h-[320px] lg:h-[380px] rounded-md overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Arrows - Always visible for infinite loop */}
            <button
              onClick={() => handleManualNavigation(prevSlide)}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-2 md:p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all group"
              aria-label="Previous images"
            >
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => handleManualNavigation(nextSlide)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md p-2 md:p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all group"
              aria-label="Next images"
            >
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-8 px-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => goToSlide(index))}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}