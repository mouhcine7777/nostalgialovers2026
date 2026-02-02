"use client";
import { motion } from 'framer-motion';
import { MapPin, Mail, Disc, Star } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-12 md:py-20 relative" style={{ backgroundColor: '#611A4F' }}>
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto px-4 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 text-center mb-4">
              <h2 className="text-4xl md:text-6xl font-black font-[Montserrat] text-white mb-4">
                CONTACTEZ-NOUS
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto font-[Montserrat] ">
              Découvrez l'univers nostalgique de notre festival et rejoignez-nous pour vivre ensemble des moments inoubliables au cœur de Casablanca.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500" />
                
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-pink-500/20 rounded-lg">
                      <Disc className="w-6 h-6 text-pink-400 animate-spin-slow" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-black text-white font-[Montserrat]">
                      CONNECTEZ-VOUS À L'EXPÉRIENCE
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-lg p-6 text-center">
                      <Mail className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2 font-[Montserrat]">
                        Email
                      </h4>
                      <p className="text-white/70 font-[Montserrat]">
                        contact@nostalgialovers.ma
                      </p>
                      <p className="text-white/70 font-[Montserrat] text-sm">
                        Réponse sous 24h
                      </p>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 text-center">
                      <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-white mb-2 font-[Montserrat]">
                        Adresse
                      </h4>
                      <p className="text-white/70 font-[Montserrat]">
                        Parc du Vélodrome
                      </p>
                      <p className="text-white/70 font-[Montserrat] text-sm">
                        Casablanca
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg overflow-hidden border-2 border-white/10 relative group">
                    <div className="absolute top-2 right-2 z-10 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.606445074074!2d-7.6480697245042055!3d33.589566173334596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f76df51bf3%3A0x5f9dfdc4ca65a5a6!2sParc%20du%20V%C3%A9lodrome!5e0!3m2!1sfr!2sma!4v1738774075758!5m2!1sfr!2sma" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-500"/>
                  </div>

                  <motion.a
                    href="mailto:contact@nostalgialovers.ma"
                    className="block w-full relative group mt-8"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-[2px]">
                      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 rounded-full px-4 md:px-6 py-3 text-center">
                        <span className="text-base md:text-lg font-black text-white font-[Montserrat]">
                          ENVOYEZ-NOUS UN MESSAGE
                        </span>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}