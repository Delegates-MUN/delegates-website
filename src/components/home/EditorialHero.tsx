"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, Compass, Sparkles, Volume2, Maximize2 } from "lucide-react";
import Image from "next/image";

export default function EditorialHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleOpenJoinModal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-join-community-modal"));
    }
  };

  const handleOpenCinemaModal = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cinematic-film"));
    }
  };

  return (
    <section className="relative w-full border-b border-[#D8D0C4] bg-[#F4F0E8] overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#EAE4D9] border border-[#D8D0C4] text-[#171717] animate-fadeInUp delay-50">
              <Sparkles className="w-3.5 h-3.5 text-[#B89358]" />
              <span className="font-interface text-[11px] uppercase tracking-[0.22em] font-medium">
                An MUN & Diplomacy Community
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-[#171717] animate-fadeInUp delay-100">
                Rooted in Principles.
                <br />
                <span className="italic font-serif font-light text-[#3A3835]">
                  United by Dialogue.
                </span>
              </h1>
              <p className="font-interface text-base sm:text-lg text-[#68645D] max-w-xl leading-relaxed pt-2 animate-fadeInUp delay-150">
                A space for Model UN enthusiasts, aspiring diplomats, and youth leaders to connect, learn without barriers, and engage with the world through critical thinking and informed dialogue.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fadeInUp delay-200">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#171717] text-[#F4F0E8] font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-black hover:shadow-md active:scale-[0.99] transition-all group"
              >
                <span>Explore DELEGATES</span>
                <Compass className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
              </Link>

              <button
                onClick={handleOpenJoinModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#171717] text-[#171717] bg-transparent font-interface text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#171717] hover:text-[#F4F0E8] active:scale-[0.99] transition-all group"
              >
                <span>Join the Community</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Editorial Institutional Markers */}
            <div className="pt-8 border-t border-[#D8D0C4] flex flex-wrap items-center justify-between gap-6 animate-fadeIn delay-300">
              <div className="space-y-1">
                <span className="block font-interface text-[10px] uppercase tracking-[0.2em] text-[#68645D]">
                  Three Pillars
                </span>
                <span className="font-editorial text-sm sm:text-base text-[#171717] font-medium block">
                  Community · Academy · Media
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-interface text-[10px] uppercase tracking-[0.2em] text-[#68645D]">
                  Core Philosophy
                </span>
                <span className="font-editorial text-sm sm:text-base text-[#171717] font-medium block">
                  DLGTS Framework
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-interface text-[10px] uppercase tracking-[0.2em] text-[#68645D]">
                  Curriculum Access
                </span>
                <span className="font-editorial text-sm sm:text-base text-[#171717] font-medium block">
                  Open Public Library
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Art Direction / Film Reel */}
          <div className="lg:col-span-5 space-y-4 animate-fadeIn delay-150">
            <div className="relative border border-[#D8D0C4] bg-[#171717] overflow-hidden shadow-lg aspect-[4/3] group card-hover-lift">
              {/* Video Element */}
              <video
                ref={videoRef}
                src="/assets/delegates-film.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
              />

              {/* Play/Pause Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <div className="px-2.5 py-1 bg-[#171717]/80 backdrop-blur-xs border border-white/20 text-white font-interface text-[10px] tracking-widest uppercase">
                    Brand Film · 30s
                  </div>
                  <div className="w-8 h-10 relative">
                    <Image
                      src="/assets/delegates-monogram-light.png"
                      alt="Monogram mark"
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="font-interface text-[10px] tracking-widest uppercase text-white/70 block">
                        DELEGATES Cinematography
                      </span>
                      <span className="font-editorial text-white text-base">
                        Rooted in Principles.
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleVideo}
                        className="p-3 bg-white text-[#171717] rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg"
                        aria-label={isPlaying ? "Pause brand video" : "Play brand video"}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 fill-current" />
                        ) : (
                          <Play className="w-4 h-4 fill-current translate-x-0.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Cinema Mode Button with Sound */}
                  <button
                    onClick={handleOpenCinemaModal}
                    className="w-full py-2 px-3 bg-black/70 hover:bg-black/90 backdrop-blur-xs border border-white/25 text-white flex items-center justify-center gap-2 text-xs font-interface uppercase tracking-widest transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#B89358]" />
                    <span>Watch with Sound (Cinema Mode)</span>
                    <Maximize2 className="w-3 h-3 text-white/70" />
                  </button>
                </div>
              </div>
            </div>

            {/* Caption underneath video */}
            <div className="flex items-start justify-between text-xs text-[#68645D] px-1">
              <span className="font-interface uppercase tracking-wider text-[11px]">
                Official Visual Record
              </span>
              <span className="font-editorial italic">
                “Dialogue grounded in principles.”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
