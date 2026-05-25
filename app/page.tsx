"use client";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import Lineup from "./components/Lineup";
import MomentsSection from "./components/MomentsSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <BannerSection />
      <Lineup />
      <MomentsSection />
      <MapSection />
      <Footer />
    </main>
  );
}
