"use client";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import SakuraPetals from "./SakuraPetals";
import StarsBackground from "./StarsBackground";
import FloatingHearts from "./FloatingHearts";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import GiftSection from "./GiftSection";
import GallerySection from "./GallerySection";
import LoveLetterSection from "./LoveLetterSection";
import MusicPlayer from "./MusicPlayer";
import CountdownTimer from "./CountdownTimer";
import ReasonsSection from "./ReasonsSection";
import FinalAnimeScene from "./FinalAnimeScene";
import EndingCredits from "./EndingCredits";
import Footer from "./Footer";

export default function ClientPage() {
  const [loaded, setLoaded] = useState(false);
  const handleLoadingComplete = useCallback(() => setLoaded(true), []);

  // Lenis smooth scroll
  useEffect(() => {
    if (!loaded) return;
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, [loaded]);

  return (
    <>
      <LoadingScreen onComplete={handleLoadingComplete} />

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <CustomCursor />
          <StarsBackground />
          <SakuraPetals />
          <FloatingHearts />
          <MusicPlayer />
          <Navbar />

          <main>
            <HeroSection />
            <GiftSection />
            <GallerySection />
            <LoveLetterSection />
            <CountdownTimer />
            <ReasonsSection />
            <FinalAnimeScene />
            <EndingCredits />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
