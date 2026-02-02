"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SpotifyPlaylistSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Set a timeout to simulate minimum loading time and ensure animation is visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-white via-pink-50 to-purple-50 overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative container mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text Content */}
        <motion.div 
          className="flex flex-col justify-center space-y-8 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <motion.span 
              className="inline-block text-pink-600 font-medium tracking-wider text-sm uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Playlist Officielle
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black font-[Montserrat] bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              REVIVEZ L'EXPÉRIENCE
            </h2>
          </div>
          
          <p className="text-base md:text-lg font-[Montserrat] font-light leading-relaxed text-gray-600">
            Revivez la magie du Nostalgia Lovers Festival 2025 avec notre playlist officielle. 
            Ces morceaux légendaires qui ont fait vibrer le public vous permettront de replonger 
            dans l'atmosphère unique de cette édition inoubliable. Écoutez, partagez et 
            gardez précieusement ces souvenirs musicaux en attendant notre prochaine édition !
          </p>
          
          <Link href="https://open.spotify.com/playlist/6pZytTaCxpmqKXqWB03hjY?si=0P1qvmYLSKqmIDC1-djc1g" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(214, 5, 158, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-white text-lg font-black font-[Montserrat] self-start bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
            >
              Écouter la Playlist
            </motion.button>
          </Link>
        </motion.div>

        {/* Spotify Embed with Animated Elements */}
        <motion.div
          className="relative order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Vinyl Record Animation */}
          <motion.div
            className="absolute -top-16 -right-16 w-32 h-32 bg-black rounded-full z-10 hidden md:block"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-0 m-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full">
              <div className="absolute inset-0 m-10 bg-gray-300 rounded-full"></div>
            </div>
          </motion.div>

          {/* Spotify Embed with Custom Styling and Loading Animation */}
          <div className="bg-white p-4 rounded-2xl shadow-xl transform hover:rotate-1 transition-transform duration-300">
            <div className="relative pb-[380px] md:pb-[80%] w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink-50 to-purple-50">
              
              {/* Loading Animation */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
                  {/* Animated vinyl record */}
                  <motion.div 
                    className="relative w-40 h-40 mb-6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div className="absolute inset-0 bg-black rounded-full">
                      <motion.div className="absolute inset-0 m-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full">
                        <motion.div className="absolute inset-0 m-12 bg-gray-300 rounded-full">
                          <motion.div className="absolute inset-0 m-2 bg-gray-700 rounded-full"></motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Reflection effect */}
                    <motion.div 
                      className="absolute top-0 left-1/4 right-1/4 h-1/2 bg-white opacity-10 rounded-t-full"
                      animate={{ opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  </motion.div>
                  
                  {/* Animated equalizer bars */}
                  <div className="flex items-end justify-center space-x-1 h-16 w-40">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 bg-gradient-to-t from-pink-600 to-purple-600 rounded-t-sm"
                        animate={{ height: [10, 30 * Math.random() + 10, 10] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                      ></motion.div>
                    ))}
                  </div>
                  
                  <motion.p 
                    className="mt-6 text-gray-600 font-medium text-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Chargement de votre playlist...
                  </motion.p>
                </div>
              )}
              
              {/* Actual Spotify iframe */}
              <iframe 
                src="https://open.spotify.com/embed/playlist/6pZytTaCxpmqKXqWB03hjY?utm_source=generator&theme=1" 
                width="100%" 
                height="100%" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className={`absolute inset-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>
            
            {/* Decorative music notes */}
            <motion.div
              className="absolute -left-8 top-1/4"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17.5V5.5C9 4.67 9.67 4 10.5 4H18.5C19.33 4 20 4.67 20 5.5V10M9 17.5C9 18.88 7.88 20 6.5 20C5.12 20 4 18.88 4 17.5C4 16.12 5.12 15 6.5 15C7.88 15 9 16.12 9 17.5ZM20 13.5V10M20 10C20 11.38 18.88 12.5 17.5 12.5C16.12 12.5 15 11.38 15 10C15 8.62 16.12 7.5 17.5 7.5C18.88 7.5 20 8.62 20 10Z" 
                  stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            
            <motion.div
              className="absolute -right-8 bottom-1/4"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17.5V5.5C9 4.67 9.67 4 10.5 4H18.5C19.33 4 20 4.67 20 5.5V10M9 17.5C9 18.88 7.88 20 6.5 20C5.12 20 4 18.88 4 17.5C4 16.12 5.12 15 6.5 15C7.88 15 9 16.12 9 17.5Z" 
                  stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotifyPlaylistSection;  