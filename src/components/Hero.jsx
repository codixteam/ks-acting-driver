import React, { useState, useRef, useEffect } from 'react';
import {
  MapPin,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ShieldCheck,
  Car,
  Clock,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/pricing';
import { openWhatsApp, WHATSAPP_TEMPLATES } from '../utils/whatsapp';

export default function Hero({ onOpenBooking }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(134); // ~02:14 default duration
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay attempt
    video.play().catch(() => setIsPlaying(false));

    const handleTimeUpdate = () => {
      if (video.duration) {
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleScrub = (e) => {
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleScrollToTariff = (e) => {
    e.preventDefault();
    const el = document.getElementById('tariff');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-center overflow-hidden bg-[#FAFCFA] pt-14 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10"
    >
      {/* Deep Emerald Organic Wave Swoosh at Bottom Right */}
      <svg
        viewBox="0 0 1000 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-6 right-0 w-[55%] sm:w-[48%] lg:w-[42%] max-w-[700px] pointer-events-none z-0"
        aria-hidden="true"
      >
        <path
          d="M 0 280 C 260 270, 480 130, 720 90 C 850 65, 940 90, 1000 120 L 1000 280 Z"
          fill="url(#heroEmeraldWaveGrad)"
        />
        <defs>
          <linearGradient id="heroEmeraldWaveGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B5C4D" />
            <stop offset="100%" stopColor="#024F45" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Eyebrow Location Pill Badge */}
        <div className="flex justify-start mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm">
            <MapPin className="w-4 h-4 text-[#0C614C] shrink-0 fill-[#0C614C]" />
            <span className="font-extrabold text-slate-900">Tenkasi</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Premier Acting Driver Service</span>
          </div>
        </div>

        {/* Hero Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Action Buttons */}
          <div className="lg:col-span-6 text-left">
            
            {/* Main Brand Heading */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] text-slate-900 mb-1.5 sm:mb-2 font-display">
              KS ACTING <br />
              <span className="text-[#024F45]">
                DRIVING SERVICE
              </span>
            </h1>

            {/* Tamil Brand Title */}
            <div className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 font-tamil mb-3 sm:mb-4 tracking-wide">
              ஆக்டிங் டிரைவர் சேவை • தென்காசி
            </div>

            {/* Tagline Block with Emerald Green Left Accent Bar */}
            <div className="border-l-4 border-[#0C614C] pl-3.5 mb-3 sm:mb-4">
              <div className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 leading-snug">
                Your Journey. Our<br />Responsibility.
              </div>
            </div>

            {/* Value Proposition Description */}
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 sm:mb-6 max-w-lg">
              Reliable, verified acting drivers for your everyday city errands, outstation family tours, and one-way drops from Tenkasi. Hourly tariffs starting from just{' '}
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#0C614C] text-white font-black text-xs sm:text-sm shadow-sm mx-0.5">
                ₹300
              </span>{' '}
              with complete pricing transparency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => openWhatsApp(WHATSAPP_TEMPLATES.GENERAL_INQUIRY())}
                className="btn-press inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-full bg-[#0B4A3F] hover:bg-[#07362e] text-white font-bold text-xs sm:text-sm md:text-base shadow-md shadow-[#0B4A3F]/25 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span>Book Driver on WhatsApp</span>
              </button>

              <a
                href="#tariff"
                onClick={handleScrollToTariff}
                className="btn-press inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm md:text-base border border-slate-200 hover:border-[#0B4A3F] shadow-sm transition-all"
              >
                <span>Explore Tariffs</span>
                <span className="text-slate-600">→</span>
              </a>
            </div>

          </div>

          {/* Right Column: Video Cinema Showcase */}
          <div className="lg:col-span-6 relative">
            
            {/* Luxury Video Cinema Box */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/95 bg-slate-950 p-0.5">
              
              <div className="relative aspect-[16/9] w-full bg-slate-900 rounded-[22px] overflow-hidden">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster="/images/ks-hero-poster.jpg"
                  className="w-full h-full object-cover object-center"
                >
                  <source src="/videos/ks-hero-video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                {/* Top Overlay Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
                  {/* Left: Official Video */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm pointer-events-auto">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-600 flex items-center justify-center text-white text-[7px] pl-0.5">
                      ▶
                    </span>
                    <span>Official Video</span>
                  </div>

                  {/* Right: 24/7 Driver Service */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20 pointer-events-auto">
                    <span>24/7 Driver Service</span>
                  </div>
                </div>

                {/* Bottom Custom Video Controls Bar */}
                <div className="absolute bottom-2.5 inset-x-2.5 z-20 bg-black/70 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-3 text-white text-xs border border-white/10">
                  
                  {/* Play / Pause Toggle */}
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1 hover:text-[#25D366] transition-colors"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 fill-current" />
                    )}
                  </button>

                  {/* Live Time Display */}
                  <span className="font-mono text-[11px] text-slate-300 shrink-0 select-none">
                    {formatTime(currentTime)} / {formatTime(duration || 134)}
                  </span>

                  {/* Scrub Bar */}
                  <div
                    className="relative flex-1 h-1.5 bg-white/25 rounded-full overflow-hidden cursor-pointer"
                    onClick={handleScrub}
                  >
                    <div
                      className="h-full bg-white rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  {/* Audio Toggle */}
                  <button
                    type="button"
                    onClick={toggleSound}
                    className="p-1 hover:text-[#25D366] transition-colors"
                    title={isMuted ? 'Click to hear audio' : 'Click to mute'}
                    aria-label="Toggle sound"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-slate-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-1 hover:text-[#25D366] transition-colors"
                    title="Fullscreen"
                    aria-label="Toggle fullscreen"
                  >
                    <Maximize className="w-4 h-4 text-slate-300" />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Floating 4-Feature Trust Strip (Slim, Elegant & Proportional) */}
        <div className="relative z-20 mt-6 sm:mt-8 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full shadow-lg shadow-slate-900/5 border border-slate-200/80 px-4 py-2.5 sm:px-6 sm:py-3 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:divide-x divide-slate-200">
            
            {/* Card 1: Verified Drivers */}
            <div className="flex items-center gap-2.5 px-1 sm:px-2">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0C614C] text-[#0C614C] bg-[#E6F4F1] flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Verified Drivers
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  Trusted & Experienced
                </div>
              </div>
            </div>

            {/* Card 2: Local & Outstation */}
            <div className="flex items-center gap-2.5 px-1 sm:px-2 lg:pl-5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0C614C] text-[#0C614C] bg-[#E6F4F1] flex items-center justify-center shrink-0 shadow-sm">
                <Car className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Local & Outstation
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  City, Family Tours & More
                </div>
              </div>
            </div>

            {/* Card 3: Transparent Tariff */}
            <div className="flex items-center gap-2.5 px-1 sm:px-2 lg:pl-5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0C614C] text-[#0C614C] bg-[#E6F4F1] flex items-center justify-center shrink-0 font-bold text-sm sm:text-base shadow-sm">
                ₹
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Transparent Tariff
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  Starting from ₹300
                </div>
              </div>
            </div>

            {/* Card 4: Flexible Booking */}
            <div className="flex items-center gap-2.5 px-1 sm:px-2 lg:pl-5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#0C614C] text-[#0C614C] bg-[#E6F4F1] flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight truncate">
                  Flexible Booking
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 truncate">
                  Hourly & Full-Day Options
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
