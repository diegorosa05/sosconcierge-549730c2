import React from 'react';
import { StarRating } from '../ui/StarRating';
import aboutHero from '@/assets/about-hero.png';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="flex justify-center items-center bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12 animate-fade-in-up">
        <div className="flex-1 flex flex-col items-start gap-6 lg:gap-8">
          <StarRating size="small" />
          
          <p className="text-black text-lg lg:text-xl font-light">
            Foco no que realmente importa!
          </p>
          
          <h2 className="font-aboreto text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            Garanta uma Experiência Concierge Incomparável
          </h2>
          
          <div className="flex flex-col gap-6">
            <p className="text-[#4C4C4C] text-base lg:text-lg font-light leading-relaxed">
              Bem-vindo à Sunny Organization Solutions. Cuidamos do que consome seu tempo, agenda, burocracias, viagens, casa, família e experiências, para que você viva o essencial.
            </p>
            <p className="text-[#4C4C4C] text-base lg:text-lg font-light leading-relaxed">
              Na S.O.S, cada detalhe é planejado e executado com excelência, confidencialidade e acompanhamento dedicado.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex flex-col">
              <p className="text-black text-sm lg:text-base font-normal">
                Chame agora
              </p>
              <a href="https://wa.me/5511940512450" target="_blank" rel="noopener noreferrer" className="text-[#E0AE2E] text-lg lg:text-xl font-normal hover:underline">
                11 94051-2450
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <img
            src={aboutHero}
            alt="Concierge premium service"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
