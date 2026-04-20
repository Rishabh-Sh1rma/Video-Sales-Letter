/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, MousePointerClick } from 'lucide-react';

// --- SLIDE DATA ---
const presentationData = [
  {
    type: "title",
    title: "5 Steps to Getting 10, 15, 30+ Predictable Sales Appointments Every Month"
  },
  {
    type: "bullets",
    title: "The Real Problem Most Businesses Face",
    subtitle: "Can you relate to any of these?",
    bullets: [
      "Unpredictable Revenue",
      "Chasing Leads",
      "Dead Marketing",
      "Shared Leads",
      "Wasted Retainers"
    ]
  },
  {
    type: "bullets",
    title: "The Old Model vs. The New Model",
    subtitle: "Moving away from unpredictability.",
    bullets: [
      "Manual Work",
      "Complete Automation",
      "Ideal Clients",
      "Predictable Growth",
      "Full Control"
    ]
  },
  {
    type: "bullets",
    title: "STEP 1: Stop Worrying About a Niche",
    subtitle: "There is something vastly more important...",
    bullets: [
      "Solve Pain",
      "Ignore Niches",
      "Communicate Clearly",
      "Build Excitement"
    ]
  },
  {
    type: "bullets",
    title: "STEP 2: Create a Video Sales Letter (VSL)",
    subtitle: "Your automated salesperson working 24/7.",
    bullets: [
      "24/7 Salesperson",
      "Build Trust",
      "Educate Leads",
      "Keep Simple"
    ]
  },
  {
    type: "bullets",
    title: "STEP 3: Create an Engineered Sales Funnel",
    subtitle: "A specific path designed to turn strangers into booked calls.",
    bullets: [
      "Landing Page",
      "Video Page",
      "Booking Page",
      "Application Form",
      "Automated Follow-up"
    ]
  },
  {
    type: "bullets",
    title: "STEP 4: Focus on Marketing That Gets Results",
    subtitle: "The 80/20 Rule: Stop the busy work.",
    bullets: [
      "Stop Busywork",
      "Direct Outreach",
      "Targeted SEO",
      "Paid Ads"
    ]
  },
  {
    type: "bullets",
    title: "The Predictable Math",
    subtitle: "Total control over your growth.",
    showMathGraph: true,
    bullets: [
      "Choose Exact Volume",
      "10 Appts = $500",
      "30 Appts = $1,500",
      "Exclusive Booked Calls",
      "High-Intent Prospects"
    ]
  },
  {
    type: "bullets",
    title: "Imagine the Result...",
    subtitle: "What happens if you execute all of this?",
    bullets: [
      "Eliminate Guesswork",
      "Reclaim Time",
      "Automate Growth",
      "Guarantee Success"
    ]
  },
  {
    type: "bullets",
    title: "STEP 5: Learn From Someone Who Has Done It",
    subtitle: "It took me 10 years to completely figure this out.",
    bullets: [
      "The Hard Way",
      "The Easy Way"
    ]
  },
  {
    type: "bullets",
    title: "Our Done-For-You System",
    subtitle: "We set everything up, get you results, and manage it.",
    showSystemDiagram: true,
    bullets: [
      "Copywriting & Scripts",
      "Funnel Building",
      "VSL Production",
      "Follow-up Systems",
      "Organic Growth Platforms"
    ]
  },
  {
    type: "metric",
    title: "What is this worth to you?",
    subtitle: "Let's do the math.",
    metrics: [
      { label: "Appointments per month", value: "20 - 30" },
      { label: "Conversion Rate", value: "20%" },
      { label: "New Clients per month", value: "4 - 6" },
      { label: "Average Value per Client", value: "$3,000" },
      { label: "Additional Yearly Revenue", value: "$144k - $216k" },
      { label: "What is the", value: "Ultimate ROI?", highlight: true }
    ]
  },
  {
    type: "bullets",
    title: "Our Guarantee",
    subtitle: "I don't want you to ever waste money again.",
    bullets: [
      "Absolute Certainty",
      "Complete Transparency",
      "Lifetime Partnership",
      "Guaranteed Success"
    ]
  },
  {
    type: "title",
    title: "Ready to Build Your Predictable Lead Engine?",
    subtitle: "Click the button below this video to schedule your call."
  }
];

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentBulletIndex, setCurrentBulletIndex] = useState(-1);

  const slide = presentationData[currentSlideIndex];

  const handleNext = useCallback(() => {
    if (slide.bullets && currentBulletIndex < slide.bullets.length - 1) {
      setCurrentBulletIndex(prev => prev + 1);
    } else if (slide.metrics && currentBulletIndex < slide.metrics.length + (slide.bullets ? slide.bullets.length : 0) - 1) {
      setCurrentBulletIndex(prev => prev + 1);
    } else if (currentSlideIndex < presentationData.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
      setCurrentBulletIndex(-1);
    }
  }, [slide, currentBulletIndex, currentSlideIndex]);

  const handlePrev = useCallback(() => {
    if (currentBulletIndex > -1) {
      setCurrentBulletIndex(prev => prev - 1);
    } else if (currentSlideIndex > 0) {
      const prevSlideIndex = currentSlideIndex - 1;
      const prevSlide = presentationData[prevSlideIndex];
      setCurrentSlideIndex(prevSlideIndex);
      
      if (prevSlide.metrics) {
        setCurrentBulletIndex(prevSlide.metrics.length + (prevSlide.bullets ? prevSlide.bullets.length : 0) - 1);
      } else if (prevSlide.bullets) {
        setCurrentBulletIndex(prevSlide.bullets.length - 1);
      } else {
        setCurrentBulletIndex(-1);
      }
    }
  }, [currentSlideIndex, currentBulletIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const handleScreenClick = (e: React.MouseEvent) => {
    const screenWidth = window.innerWidth;
    if (e.clientX > screenWidth / 2) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const progress = (currentSlideIndex / (presentationData.length - 1)) * 100;

  return (
    <div 
      className="w-screen h-screen flex flex-col justify-center items-center relative bg-human-touch cursor-pointer"
      onClick={handleScreenClick}
    >
      {/* Branding Logo Fixed to Top Left */}
      <div className="fixed top-8 left-8 flex items-center gap-3 z-50 pointer-events-none">
        <img 
          src="https://i.ibb.co/8HTyKDv/favicon.jpg" 
          alt="RawCanvas Logo" 
          className="w-10 h-10 rounded-full border border-stone-200 shadow-sm"
        />
        <span className="font-semibold text-stone-700 tracking-tight text-lg">RawCanvas</span>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-200">
        <div 
          className="h-full bg-[#42f5b3] transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Growth Graph Decorative Element (Shown ONLY on Predictable Math) */}
      <div className={`absolute right-[5%] lg:right-[10%] bottom-[15%] w-[450px] lg:w-[550px] transition-all duration-1000 ease-out pointer-events-none z-0 ${slide.showMathGraph && currentBulletIndex >= 0 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}>
        <svg viewBox="0 0 550 400" className="w-full h-full drop-shadow-[0_0_20px_rgba(66,245,179,0.2)]">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#42f5b3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#42f5b3" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#42f5b3" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#42f5b3" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Axes */}
          <line x1="80" y1="340" x2="520" y2="340" stroke="#d6d3d1" strokeWidth="3" strokeLinecap="round" />
          <line x1="80" y1="340" x2="80" y2="40" stroke="#d6d3d1" strokeWidth="3" strokeLinecap="round" />
          
          {/* Graph Shape */}
          <path d="M 80 340 L 80 320 Q 250 290 480 80 L 480 340 Z" fill="url(#fillGrad)" />
          <path d="M 80 320 Q 250 290 480 80" fill="none" stroke="url(#lineGrad)" strokeWidth="8" strokeLinecap="round" />
          
          {/* Highlight Points & Labels */}
          {currentBulletIndex >= 1 && (
            <g className="transition-opacity duration-700 animate-fade-in">
              <circle cx="210" cy="272" r="8" fill="#fff" stroke="#42f5b3" strokeWidth="4" />
              <text x="210" y="245" fill="#42f5b3" fontSize="22" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">$500</text>
              <text x="210" y="305" fill="#78716c" fontSize="16" fontWeight="bold" textAnchor="middle">10 Appointments</text>
            </g>
          )}

          {currentBulletIndex >= 2 && (
            <g className="transition-opacity duration-700 animate-fade-in delay-300">
              <circle cx="430" cy="120" r="10" fill="#fff" stroke="#42f5b3" strokeWidth="5" />
              <text x="430" y="85" fill="#42f5b3" fontSize="26" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">$1,500</text>
              <text x="430" y="155" fill="#78716c" fontSize="18" fontWeight="bold" textAnchor="middle">30 Appointments</text>
            </g>
          )}
          
          {/* Axis Labels */}
          <text x="300" y="380" fill="#a8a29e" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="2">AD SPEND</text>
          <text x="-190" y="40" transform="rotate(-90)" fill="#a8a29e" fontSize="16" fontWeight="bold" textAnchor="middle" letterSpacing="2">APPOINTMENTS</text>
        </svg>
      </div>

      {/* Done-For-You System Diagram Layer */}
      <div className={`absolute right-[5%] lg:right-[10%] top-[25%] lg:top-[20%] w-[380px] lg:w-[480px] flex flex-col justify-center items-center pointer-events-none z-10 transition-all duration-1000 ${slide.showSystemDiagram ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {[
          "Scripting / Copywriting",
          "Automated Funnel Building",
          "VSL Post-Production",
          "Automated Follow-ups System",
          "Organic Growth (YouTube & LinkedIn)"
        ].map((item, idx) => (
          <div key={idx} className={`w-full flex-col flex items-center transition-all duration-700 ${idx <= currentBulletIndex && slide.showSystemDiagram ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {idx > 0 && (
              <div className="w-1.5 h-6 lg:h-8 bg-gradient-to-b from-stone-200 to-[#42f5b3] mb-2 rounded-full"></div>
            )}
            <div className="w-full bg-white/95 border border-stone-200 rounded-2xl p-5 lg:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md flex items-center justify-center text-center ring-1 ring-white/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#42f5b3]"></div>
              <span className="font-bold text-stone-800 text-lg lg:text-2xl tracking-tight drop-shadow-sm">{item}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Helper visual hints for clicking (only visible on first slide temporarily or always opaque) */}
      {currentSlideIndex === 0 && (
         <div className="absolute bottom-8 right-8 flex items-center gap-2 text-stone-400 text-sm font-medium opacity-60">
            <MousePointerClick size={16} /> Click right half of screen or use arrows to advance
         </div>
      )}

      {/* Slide Content - Shifted up with justify-start and top padding */}
      <div className="w-full max-w-[1280px] px-8 md:px-16 z-10 flex flex-col justify-start pt-32 md:pt-[18vh] h-full pointer-events-none pb-20">
        
        <div key={`slide-${currentSlideIndex}`} className="fade-in">
          
          {/* Headings */}
          <h1 className={`font-extrabold tracking-tight text-balance text-stone-800 leading-[1.12] mb-2 ${slide.type === 'title' ? 'text-[42px] md:text-6xl lg:text-[76px] text-center max-w-[1100px] mx-auto py-8' : 'text-4xl md:text-5xl lg:text-[60px]'}`}>
            {slide.title}
          </h1>
          
          {slide.subtitle && (
            <p className={`text-xl md:text-[28px] text-balance text-stone-500 font-medium mb-6 ${slide.type === 'title' ? 'text-center mt-6 max-w-[800px] mx-auto' : 'mt-4'}`}>
              {slide.subtitle}
            </p>
          )}

          {/* Bullet Points Layout */}
          {slide.bullets && slide.type === 'bullets' && (
            <ul className="space-y-6 md:space-y-8 mt-12 max-w-[1150px]">
              {slide.bullets.map((bullet, index) => (
                <li 
                  key={index} 
                  className={`text-3xl md:text-[44px] leading-tight font-black tracking-tight text-stone-700 flex items-center transition-all duration-700 ${index <= currentBulletIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                  <ArrowRight size={44} strokeWidth={2.5} className="mr-6 text-[#42f5b3] shrink-0 opacity-100 drop-shadow-md" />
                  <span className="flex-1 drop-shadow-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Metric Layout (ROI Slide) - 3-column grid with bigger squares and the 6th Ultimate ROI box */}
          {slide.metrics && slide.type === 'metric' && (
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1400px]">
                {slide.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className={`p-8 md:p-10 border rounded-[32px] backdrop-blur-sm transition-all duration-700 flex flex-col justify-center ${index <= currentBulletIndex ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} ${metric.highlight ? 'border-[#42f5b3] bg-[#42f5b3]/10 shadow-[0_8px_30px_rgba(66,245,179,0.15)] ring-2 ring-[#42f5b3]/30' : 'border-stone-200 bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)]'}`}
                  >
                    <div className={`font-semibold uppercase tracking-wide text-sm md:text-base mb-3 ${metric.highlight ? 'text-[#42f5b3]' : 'text-stone-500'}`}>{metric.label}</div>
                    <div className={`text-4xl md:text-[52px] font-black leading-tight tracking-tight ${metric.highlight ? 'text-[#42f5b3]' : 'text-stone-800'}`}>{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
