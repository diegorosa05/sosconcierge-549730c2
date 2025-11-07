import React from 'react';
import featurePlanning from '@/assets/feature-planning.jpg';
import featureDiscretion from '@/assets/feature-discretion.jpg';
import featureExcellence from '@/assets/feature-excellence.jpg';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'PLANEJAMENTO IMPECÁVEL',
      heading: 'Cada detalhe pensado para você',
      description: 'Nossa equipe cuida de todo o planejamento e execução das suas demandas. Desde viagens internacionais até eventos pessoais, garantimos que tudo seja executado com precisão absoluta e atenção aos mínimos detalhes.',
      image: featurePlanning,
      imagePosition: 'left'
    },
    {
      title: 'DISCRIÇÃO GARANTIDA',
      heading: 'Confidencialidade em primeiro lugar',
      description: 'Trabalhamos com total sigilo e profissionalismo. Todas as informações e solicitações são tratadas com máxima confidencialidade, garantindo sua privacidade e tranquilidade em todos os momentos.',
      image: featureDiscretion,
      imagePosition: 'right'
    },
    {
      title: 'EXCELÊNCIA NO ATENDIMENTO',
      heading: 'Superando suas expectativas',
      description: 'Nossa equipe dedicada está disponível para atender suas necessidades com o mais alto padrão de qualidade. Acompanhamento personalizado, respostas rápidas e soluções eficientes para tornar seu dia a dia mais leve.',
      image: featureExcellence,
      imagePosition: 'left'
    }
  ];

  return (
    <section className="flex justify-center items-center bg-[#F6F5EE] py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex w-full max-w-7xl flex-col items-start gap-16 lg:gap-24">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex items-stretch self-stretch animate-fade-in-up gap-8 lg:gap-12 ${
              feature.imagePosition === 'right' ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'
            }`}
          >
            <div className="flex-1 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.heading}
                className="w-full h-full min-h-[350px] lg:min-h-[450px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center items-start gap-6 lg:gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-[#E0AE2E] text-xs lg:text-sm font-light tracking-[0.2em] uppercase">
                  {feature.title}
                </p>
                <h3 className="font-aboreto text-black text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight leading-tight">
                  {feature.heading}
                </h3>
              </div>
              <p className="text-[#4C4C4C] text-base lg:text-lg font-light leading-relaxed">
                {feature.description}
              </p>
              <div className="h-1 w-20 bg-[#E0AE2E] mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
