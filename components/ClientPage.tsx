"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
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
import FinalScene from "./FinalScene";
import Footer from "./Footer";

export default function ClientPage() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadingComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onComplete={handleLoadingComplete} />

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Global overlays */}
          <CustomCursor />
          <StarsBackground />
          <SakuraPetals />
          <FloatingHearts />
          <MusicPlayer />

          {/* Navigation */}
          <Navbar />

          {/* Page sections */}
          <main>
            <HeroSection />
            <GiftSection />
            <GallerySection />
            <LoveLetterSection />
            <CountdownTimer />
            <ReasonsSection />
            <FinalScene />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
