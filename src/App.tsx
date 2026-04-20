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
      "Do you start each month wondering where that next client is going to come from?",
      "Do you hate the idea of chasing leads instead of having them chase you?",
      "Are traditional methods like cold calling and networking no longer getting results?",
      "Have you tried paying for leads, but only received low-quality or shared lists?",
      "Are you paying a monthly retainer to an agency but struggling to see tangible ROI?"
    ]
  },
  {
    type: "bullets",
    title: "The Old Model vs. The New Model",
    subtitle: "Moving away from unpredictability.",
    bullets: [
      "The Old Model is unscalable: you're stuck doing manual busywork and relying on luck.",
      "The New Model is completely automated, predictable, profitable, and highly scalable.",
      "You easily attract ONLY the clients you want to work with and filter out the rest.",
      "You generate high-quality leads, appointments, and clients predictably on demand.",
      "Best of all, you are in full control of exactly how many clients you win each month."
    ]
  },
  {
    type: "bullets",
    title: "STEP 1: Stop Worrying About a Niche",
    subtitle: "There is something vastly more important...",
    bullets: [
      "Everyone says 'find a niche', but solving a big, painful problem is what actually matters.",
      "If you don't solve a truly painful problem, it doesn't matter how good your marketing is.",
      "Once you identify that massive pain point, you must learn exactly how to communicate it.",
      "When articulated perfectly, prospects will naturally get excited to learn how you can help."
    ]
  },
  {
    type: "bullets",
    title: "STEP 2: Create a Video Sales Letter (VSL)",
    subtitle: "Your automated salesperson working 24/7.",
    bullets: [
      "Imagine a salesperson who speaks to leads perfectly, 24/7—even booking calls at 4:30 AM.",
      "A Video Sales Letter is a fully automated way to build immense trust and provide value.",
      "Without a VSL, campaigns fail because strangers don't know, like, or trust you yet.",
      "No expensive gear needed—a simple presentation explaining exactly how you help works best."
    ]
  },
  {
    type: "bullets",
    title: "STEP 3: Create an Engineered Sales Funnel",
    subtitle: "A specific path designed to turn strangers into booked calls.",
    bullets: [
      "1. Landing Page: Capture their name & email by offering the valuable VSL video.",
      "2. Video Page: Your VSL does the heavy lifting, education, and selling.",
      "3. Schedule Page: Qualified prospects book directly into your personal calendar.",
      "4. Application Page: They fill out a short form so you know exactly who you are speaking to.",
      "5. Automated Follow-ups & Retargeting: Crucial step because not everyone books immediately."
    ]
  },
  {
    type: "bullets",
    title: "STEP 4: Focus on Marketing That Gets Results",
    subtitle: "The 80/20 Rule: Stop the busy work.",
    bullets: [
      "Stop the 80% busy work (random daily social posting, blind networking, cold pitches).",
      "LinkedIn: Direct messaging to specifically offer your free, valuable video—no pitching upfront.",
      "Organic SEO: Only create content on topics your exact potential clients are actually searching for.",
      "Facebook & TikTok Ads: Predictably scale by sending targeted traffic directly to your new funnel."
    ]
  },
  {
    type: "bullets",
    title: "The Predictable Math",
    subtitle: "Total control over your growth.",
    bullets: [
      "Once you know your numbers (for example: $50 per appointment), you have absolute control.",
      "Want 10 appointments this month? You simply invest $500.",
      "Want 30 appointments? You invest $1,500.",
      "These are exclusive, high-quality booked sales appointments with people expecting your call."
    ]
  },
  {
    type: "bullets",
    title: "Imagine the Result...",
    subtitle: "What happens if you execute all of this?",
    bullets: [
      "No longer starting the month wondering where your next client is coming from.",
      "No longer wasting time relying on networking events, unpredictable referrals, or word of mouth.",
      "Take complete strangers to booked appointments reliably—100% online and automated.",
      "Know exactly how many leads, appointments, and clients you will comfortably win."
    ]
  },
  {
    type: "bullets",
    title: "STEP 5: Learn From Someone Who Has Done It",
    subtitle: "It took me 10 years to completely figure this out.",
    bullets: [
      "I spent a decade speaking, cold calling, and exhausting myself finding what actually works.",
      "Option 1 - The Hard Way: Go alone, spend years of trial and error, and thousands of dollars wasted.",
      "Option 2 - The Easy Way: Shortcut the process and plug into a proven, battle-tested system."
    ]
  },
  {
    type: "bullets",
    title: "Our Done-For-You System",
    subtitle: "We set everything up, get you results, and manage it.",
    bullets: [
      "We write the copy, create the exact VSL script, and professionally edit your video.",
      "We build the entire automated sales funnel and write 3 full months of automated follow-up emails.",
      "We set up your paid ads (Facebook/TikTok) to get you leads within the first few days.",
      "We script, edit, and distribute organic content for compounding long-term growth.",
      "The entire system is completely set up and generating leads for you in just 30 days."
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
      "How much would you invest to add over $200k to your business every single year?"
    ]
  },
  {
    type: "bullets",
    title: "Our Guarantee",
    subtitle: "I don't want you to ever waste money again.",
    bullets: [
      "So many people buy courses or hire agencies that provide absolutely zero support when it counts.",
      "We exclusively offer Lifetime 1-to-1 private support directly with me.",
      "We work closely with you for as long as it takes for you to see actual results.",
      "No hidden fees, no dropping you after 90 days, and no paying extra for 'more support'."
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
          <h1 className={`font-extrabold tracking-tight text-stone-800 leading-[1.15] mb-2 ${slide.type === 'title' ? 'text-4xl md:text-6xl lg:text-[72px] text-center max-w-[1100px] mx-auto py-8' : 'text-3xl md:text-5xl lg:text-[52px]'}`}>
            {slide.title}
          </h1>
          
          {slide.subtitle && (
            <p className={`text-xl md:text-[26px] text-stone-500 font-medium mb-6 ${slide.type === 'title' ? 'text-center mt-6' : 'mt-2'}`}>
              {slide.subtitle}
            </p>
          )}

          {/* Bullet Points Layout */}
          {slide.bullets && slide.type === 'bullets' && (
            <ul className="space-y-4 md:space-y-5 mt-6 max-w-[1150px]">
              {slide.bullets.map((bullet, index) => (
                <li 
                  key={index} 
                  className={`text-xl md:text-[24px] leading-[1.4] font-medium text-stone-700 flex items-start transition-all duration-700 ${index <= currentBulletIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                  <ArrowRight size={28} className="mr-4 text-[#42f5b3] shrink-0 opacity-100 mt-1 drop-shadow-sm" />
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Metric Layout (ROI Slide) - Adjusted to a 3-column grid to save vertical space */}
          {slide.metrics && slide.type === 'metric' && (
            <div className="mt-6">
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
                    className={`text-2xl md:text-[28px] font-bold text-center text-[#42f5b3] drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] transition-all duration-700 mt-4 ${bulletIndex <= currentBulletIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
