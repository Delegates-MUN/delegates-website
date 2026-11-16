"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export default function VideoCinematicModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsPlaying(true);
    };

    window.addEventListener("open-cinematic-film", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
      if (e.key === " " && isOpen) {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === "m" && isOpen) {
        toggleMute();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-cinematic-film", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser blocks unmuted autoplay, mute and retry
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
          }
        });
    }
  }, [isOpen]);

  const togglePlay = () => {
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 1;
      setCurrentTime(cur);
      setDuration(dur);
      setProgress((cur / dur) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      videoRef.current.currentTime = pct * (videoRef.current.duration || 1);
    }
  };

  const toggleFullScreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="DELEGATES Brand Film Cinema Experience"
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-30 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-7 h-9 relative">
            <Image
              src="/assets/delegates-monogram-light.png"
              alt="DELEGATES Monogram"
              fill
              sizes="28px"
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-interface text-[10px] uppercase tracking-[0.22em] text-[#C9C2B7] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#B89358]" />
              Official Visual Record · 4K Film
            </span>
            <h2 className="font-editorial text-sm sm:text-base text-white font-normal">
              Rooted in Principles. United by Dialogue.
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#C9C2B7] hover:text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full"
            aria-label="Close cinematic video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Video Presentation */}
      <div className="relative w-full max-w-5xl mx-4 aspect-[16/9] bg-black border border-white/15 shadow-2xl overflow-hidden group">
        <video
          ref={videoRef}
          src="/assets/delegates-film.mp4"
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Center Big Play Button if paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-20 h-20 bg-white/90 text-[#171717] rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-2xl z-20"
            aria-label="Play"
          >
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </button>
        )}

        {/* Video Scrubber & Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 space-y-3 z-20">
          {/* Progress Bar */}
          <div
            onClick={handleSeek}
            className="w-full h-1.5 bg-white/20 hover:h-2 transition-all cursor-pointer relative"
          >
            <div
              className="h-full bg-[#B89358] transition-all relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-xs" />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between text-white font-interface text-xs">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="hover:text-[#B89358] transition-colors p-1"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current" />
                )}
              </button>

              <button
                onClick={restartVideo}
                className="hover:text-[#B89358] transition-colors p-1"
                aria-label="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={toggleMute}
                className="flex items-center gap-1.5 hover:text-[#B89358] transition-colors p-1"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-red-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                )}
                <span className="text-[10px] uppercase tracking-wider hidden sm:inline">
                  {isMuted ? "Muted" : "Sound On"}
                </span>
              </button>

              <div className="text-[11px] text-[#C9C2B7] font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[11px] text-[#C9C2B7] uppercase tracking-widest hidden md:inline font-interface">
                DLGTS Cinematic Record
              </span>

              <button
                onClick={toggleFullScreen}
                className="hover:text-[#B89358] transition-colors p-1"
                aria-label="Toggle Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
