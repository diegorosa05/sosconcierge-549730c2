import React from 'react';
import { StarRating } from '../ui/StarRating';
import NavHeader from '../ui/nav-header';
import heroBackground from '@/assets/hero-background.png';

export const HeroSection: React.FC = () => {
  return <section id="home" className="min-h-screen relative flex items-center justify-center py-20 px-6 lg:px-20 overflow-hidden">
      <NavHeader />
      
      <div className="absolute inset-0 z-0">
        <img src={heroBackground} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
      </div>
      <div className="w-full max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col items-center gap-6 lg:gap-8 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex flex-col items-center gap-4 lg:gap-6">
            <StarRating />
            <p className="text-white text-center text-sm lg:text-lg font-light tracking-wider">
              Resolvemos suas tarefas secundárias para que seu tempo se torne primário.
            </p>
            <h1 className="font-aboreto text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight leading-tight">
              Concierge premium, cuidamos de tudo para você focar no essencial.
            </h1>
          </div>

          
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-32 flex flex-col items-center max-lg:hidden">
          <div className="relative -rotate-90 w-64">
            
            
          </div>
        </div>
      </div>
    </section>;
};