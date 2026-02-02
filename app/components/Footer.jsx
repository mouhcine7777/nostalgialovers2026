"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/NostalgiaLoversFestival", label: "Visit our Facebook page", color: "#7F0646" },
    { icon: Instagram, href: "https://www.instagram.com/nostalgialoversfestival/", label: "Follow us on Instagram", color: "#7F0646" },
    { icon: Youtube, href: "https://www.youtube.com/@NostalgiaLoversFestival", label: "Subscribe to our YouTube channel", color: "#7F0646" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative bg-[#611A4F] text-white py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <Link href="/" aria-label="Return to homepage">
              <Image
                src="/logo.png"
                alt="Nostalgia Lovers Festival Logo"
                width={120}
                height={120}
                className="mx-auto md:mx-0"
              />
            </Link>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.div 
                key={social.href} 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:opacity-75 transition-all"
              >
                <Link 
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center"
                >
                  <social.icon color="white" size={24} aria-hidden="true" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 border-t border-white/20 pt-12">
          <div className="space-y-4">
            <h2 className="text-xl font-[Montserrat] font-bold mb-4">About Festival</h2>
            <p className="font-[Montserrat] font-light text-white/80">
              Step Into the Timeless World of 80s and 90s Nostalgia and Join Us for an Unforgettable Experience
            </p>
          </div>

          <nav aria-label="Quick navigation" className="space-y-4">
            <h2 className="text-xl font-[Montserrat] font-bold mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 gap-2">
            <Link href="/" className="font-[Montserrat] font-light text-white/80 hover:text-white">Accueil</Link>
              <Link href="/lineup" className="font-[Montserrat] font-light text-white/80 hover:text-white">Lineup</Link>
              <Link href="/editions" className="font-[Montserrat] font-light text-white/80 hover:text-white">Éditions 1 & 2</Link>
              <Link href="/contact" className="font-[Montserrat] font-light text-white/80 hover:text-white">Contact</Link>
            </div>
          </nav>

          <div className="space-y-4">
            <h2 className="text-xl font-[Montserrat] font-bold mb-4">Connect With Us</h2>
            <div className="space-y-2">
              <a 
                href="mailto:contact@nostalgialovers.ma" 
                className="flex items-center space-x-2 hover:text-white/90"
                aria-label="Email us at contact@nostalgialovers.ma"
              >
                <Mail size={20} className="text-white/80" aria-hidden="true" />
                <span className="font-[Montserrat] font-light">contact@nostalgialovers.ma</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-white/80" aria-hidden="true" />
                <span className="font-[Montserrat] font-light">Parc du Vélodrome</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center font-[Montserrat] font-light text-white/60 mt-12 pt-6 border-t border-white/20">
          © {new Date().getFullYear()} Nostalgia Lovers Festival. All Rights Reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;