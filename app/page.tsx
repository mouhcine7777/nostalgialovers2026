"use client";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import Lineup from "./components/Lineup";
import MomentsSection from "./components/MomentsSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <Lineup />
      <MomentsSection />
      <MapSection />
      <Footer />
    </main>
  );
}
