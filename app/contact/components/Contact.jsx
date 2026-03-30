"use client";
import { motion } from 'framer-motion';
import { MapPin, Mail, Disc, Star } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-12 md:py-20 relative" style={{ backgroundColor: '#1a0a00' }}>

      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Header */}
            <div className="relative z-10 text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-10 bg-orange-500" />
                <span
                  className="text-orange-500 text-xs tracking-[0.4em] uppercase font-bold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Nous Trouver
                </span>
                <div className="h-px w-10 bg-orange-500" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-[Montserrat] text-white mb-4">
                CONTACTEZ-<span className="text-orange-500">NOUS</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto font-[Montserrat]">
                Découvrez l'univers nostalgique de notre festival et rejoignez-nous pour vivre ensemble des moments inoubliables au cœur de Casablanca.
              </p>
            </div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="relative rounded-xl overflow-hidden border border-orange-500/20"
                style={{ backgroundColor: 'rgba(255,107,0,0.04)' }}
              >
                {/* Left orange bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500" />

                <div className="p-6 md:p-8">

                  {/* Card header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                      <Disc className="w-6 h-6 text-orange-400 animate-spin-slow" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-3xl font-black text-white font-[Montserrat]">
                      CONNECTEZ-VOUS À L'<span className="text-orange-500">EXPÉRIENCE</span>
                    </h3>
                  </div>

                  {/* Info cards */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="rounded-lg p-6 text-center border border-orange-500/10 hover:border-orange-500/30 transition-colors duration-300"
                      style={{ backgroundColor: 'rgba(255,107,0,0.06)' }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                          <Mail className="w-6 h-6 text-orange-400" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 font-[Montserrat]">
                        Email
                      </h4>
                      <p className="text-white/70 font-[Montserrat]">
                        contact@nostalgialovers.ma
                      </p>
                      <p className="text-orange-500/60 font-[Montserrat] text-sm mt-1">
                        Réponse sous 24h
                      </p>
                    </div>

                    <div
                      className="rounded-lg p-6 text-center border border-orange-500/10 hover:border-orange-500/30 transition-colors duration-300"
                      style={{ backgroundColor: 'rgba(255,107,0,0.06)' }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255,107,0,0.15)' }}>
                          <MapPin className="w-6 h-6 text-amber-400" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 font-[Montserrat]">
                        Adresse
                      </h4>
                      <p className="text-white/70 font-[Montserrat]">
                        Parc du Vélodrome
                      </p>
                      <p className="text-orange-500/60 font-[Montserrat] text-sm mt-1">
                        Casablanca
                      </p>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="mt-8 rounded-lg overflow-hidden border border-orange-500/20 relative group">
                    <div className="absolute top-2 right-2 z-10 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
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
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
                  </div>

                  {/* CTA button */}
                  <motion.a
                    href="mailto:contact@nostalgialovers.ma"
                    className="block w-full mt-8"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="rounded-full px-4 md:px-6 py-3 text-center"
                      style={{ background: 'linear-gradient(135deg, #f97316, #fbbf24)' }}
                    >
                      <span className="text-base md:text-lg font-black text-white font-[Montserrat] tracking-wide">
                        ENVOYEZ-NOUS UN MESSAGE
                      </span>
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