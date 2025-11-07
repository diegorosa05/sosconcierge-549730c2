import React from 'react';
import { StarRating } from '../ui/StarRating';
import ctaBackground from '@/assets/cta-background.png';

export const CTASection: React.FC = () => {
  return (
    <section className="flex justify-center items-center relative py-16 lg:py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-8 w-full max-w-2xl animate-fade-in-up relative z-10">
        <StarRating size="small" />
        
        <p className="text-white text-center text-sm lg:text-base font-light tracking-widest">
          SUNNY ORGANIZATION SOLUTIONS
        </p>
        
        <h2 className="font-aboreto text-white text-center text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
          Viva a Experiência S.O.S
        </h2>
        
        <button className="w-20 h-20 lg:w-24 lg:h-24 flex justify-center items-center cursor-pointer bg-[rgba(255,255,255,0.10)] p-6 rounded-full hover:bg-[rgba(255,255,255,0.20)] transition-colors">
          <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 14.7634C29.3333 15.5332 29.3333 17.4577 28 18.2275L5.5 31.2179C4.16667 31.9877 2.5 31.0255 2.5 29.4859L2.5 3.50512C2.5 1.96552 4.16667 1.00326 5.5 1.77307L28 14.7634Z" stroke="#E0AE2E" strokeWidth="3"/>
          </svg>
        </button>
      </div>
    </section>
  );
};
