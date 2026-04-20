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
    bullets: [
      "Know Numbers",
      "Predict Costs",
      "Scale Predictably",
      "Exclusive Appointments"
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
      "10-Year Shortcut",
      "The Hard Way",
      "The Easy Way"
    ]
  },
  {
    type: "bullets",
    title: "Our Done-For-You System",
    subtitle: "We set everything up, get you results, and manage it.",
    bullets: [
      "Copywriting",
      "Funnel Building",
      "Ads Management",
      "Organic Content",
      "30-Day Launch"
    ]
  },
  {
    type: "metric",
    title: "What is this worth to you?",
    subtitle: "Let's do the conservative math.",
    metrics: [
      { label: "Appointments per month", value: "20 - 30" },
      { label: "Conversion Rate", value: "20%" },
      { label: "New Clients per month", value: "4 - 6" },
      { label: "Average Value per Client", value: "$3,000" },
      { label: "Additional Yearly Revenue", value: "$144k - $216k" }
    ],
    bullets: [
      "What is the ultimate ROI?"
    ]
  },
  {
    type: "bullets",
    title: "Our Guarantee",
    subtitle: "I don't want you to ever waste money again.",
    bullets: [
      "Zero Risk",
      "1-on-1 Support",
      "Results Guaranteed",
      "No Hidden Fees"
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

      {/* Helper visual hints for clicking (only visible on first slide temporarily or always opaque) */}
      {currentSlideIndex === 0 && (
         <div className="absolute bottom-8 right-8 flex items-center gap-2 text-stone-400 text-sm font-medium opacity-60">
            <MousePointerClick size={16} /> Click right half of screen or use arrows to advance
         </div>
      )}

      {/* Slide Content - Sized and Spaced to Prevent Overspill */}
      <div className="w-full max-w-[1280px] px-8 md:px-16 z-10 flex flex-col justify-center h-full pointer-events-none py-20">
        
        <div key={`slide-${currentSlideIndex}`} className="fade-in">
          
          {/* Headings */}
          <h1 className={`font-extrabold tracking-tight text-stone-800 leading-[1.15] mb-2 ${slide.type === 'title' ? 'text-4xl md:text-6xl lg:text-[72px] text-center max-w-[1100px] mx-auto py-8' : 'text-3xl md:text-5xl lg:text-[56px]'}`}>
            {slide.title}
          </h1>
          
          {slide.subtitle && (
            <p className={`text-xl md:text-[28px] text-stone-500 font-medium mb-6 ${slide.type === 'title' ? 'text-center mt-6 max-w-[800px] mx-auto' : 'mt-4'}`}>
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

          {/* Metric Layout (ROI Slide) - Adjusted to a 3-column grid to save vertical space */}
          {slide.metrics && slide.type === 'metric' && (
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-8 max-w-[1200px]">
                {slide.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className={`p-6 border border-stone-200 rounded-3xl bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-700 flex flex-col justify-center ${index <= currentBulletIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  >
                    <div className="text-stone-500 font-semibold uppercase tracking-wide text-[13px] mb-2">{metric.label}</div>
                    <div className="text-3xl md:text-[40px] font-black text-stone-800 leading-tight">{metric.value}</div>
                  </div>
                ))}
              </div>
              
              {slide.bullets && slide.bullets.map((bullet, index) => {
                const bulletIndex = (slide.metrics ? slide.metrics.length : 0) + index;
                return (
                  <div 
                    key={index} 
                    className={`text-2xl md:text-[32px] font-bold text-center text-[#42f5b3] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] transition-all duration-700 mt-6 ${bulletIndex <= currentBulletIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    {bullet}
                  </div>
                )
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
