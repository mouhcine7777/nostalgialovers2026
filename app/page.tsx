"use client";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import SpotifyPlaylistSection from "./components/SpotifyPlaylistSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <GallerySection />
      <SpotifyPlaylistSection />
      <MapSection />
      <Footer />
    </main>
  );
}
