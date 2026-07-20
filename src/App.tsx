/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Partnership from "./components/Partnership";
import Legal from "./components/Legal";
import Footer from "./components/Footer";

export default function App() {
  // Audio Playback logic: Trigger audio.mp3 ONCE upon the first user interaction (scroll or click)
  useEffect(() => {
    let played = false;

    const triggerAudio = () => {
      if (played) return;
      played = true;

      // Unbind event listeners immediately
      window.removeEventListener("click", triggerAudio);
      window.removeEventListener("scroll", triggerAudio, { capture: true });

      // Build Audio element and play welcome sound
      const audio = new Audio("/audio.mp3");
      audio.play().catch((err) => {
        console.warn("audio.mp3 play was blocked or not found. playing synthesized luxury corporate welcome sound.", err);
        // Fallback: Web Audio API beautiful corporate gold chime
        try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          if (!AudioContextClass) return;
          const ctx = new AudioContextClass();
          const now = ctx.currentTime;

          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gainNode = ctx.createGain();

          osc1.type = "sine";
          osc1.frequency.setValueAtTime(523.25, now); // C5 note
          osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.35); // G5 note

          osc2.type = "sine";
          osc2.frequency.setValueAtTime(659.25, now + 0.15); // E5 note
          osc2.frequency.exponentialRampToValueAtTime(1046.50, now + 0.45); // C6 note

          // Smooth luxurious fade out
          gainNode.gain.setValueAtTime(0.12, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

          osc1.connect(gainNode);
          osc2.connect(gainNode);
          gainNode.connect(ctx.destination);

          osc1.start(now);
          osc2.start(now + 0.15);
          
          osc1.stop(now + 1.4);
          osc2.stop(now + 1.4);
        } catch (e) {
          console.error("Web Audio API synthesis failed:", e);
        }
      });
    };

    window.addEventListener("click", triggerAudio);
    // Use passive scroll listener for optimization, capture true to ensure we intercept it early
    window.addEventListener("scroll", triggerAudio, { passive: true, capture: true });

    return () => {
      window.removeEventListener("click", triggerAudio);
      window.removeEventListener("scroll", triggerAudio, { capture: true });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50/50 flex flex-col justify-between selection:bg-gold-500/30 selection:text-royal-900 overflow-x-hidden">
      {/* Sticky Premium Navigation */}
      <Header />

      {/* Main Corporate Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Showcase />
        <Pricing />
        <Services />
        <Reviews />
        <Partnership />
        <Legal />
      </main>

      {/* Elite Corporate Footer */}
      <Footer />
    </div>
  );
}

