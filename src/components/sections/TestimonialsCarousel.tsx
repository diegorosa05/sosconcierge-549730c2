import React, { useState } from 'react';
import testimonialBackground from '@/assets/testimonial-background.png';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: 'Deleguei o que me tomava energia e ganhei horas por semana. A S.O.S cuida de tudo com uma discrição impressionante e uma execução impecável. É como ter um time de confiança no bolso.',
      author: 'Mariana Campos',
      role: 'Executiva de Operações'
    },
    {
      id: 2,
      text: 'A S.O.S transformou minha rotina. Finalmente consigo focar no que realmente importa enquanto eles cuidam de todos os detalhes. Profissionalismo e confiança em cada interação.',
      author: 'Ricardo Santos',
      role: 'CEO de Tecnologia'
    },
    {
      id: 3,
      text: 'Excelência em cada detalhe. O serviço premium que eu procurava há anos. A equipe S.O.S é simplesmente indispensável no meu dia a dia.',
      author: 'Patricia Lima',
      role: 'Empresária'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="flex flex-col justify-center items-center gap-12 relative py-16 lg:py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={testimonialBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
      </div>

      <div className="flex flex-col justify-center items-start gap-6 lg:gap-8 w-full max-w-4xl animate-fade-in-up relative z-10">
        <p className="text-white text-sm lg:text-base font-light tracking-widest">
          DEPOIMENTOS
        </p>
        
        <h2 className="font-aboreto text-white text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
          Você sente a diferença no primeiro mês
        </h2>
        
        <div className="w-24 h-px bg-[#E0AE2E]" />
        
        <blockquote className="text-white text-base lg:text-lg font-light leading-relaxed min-h-[120px]">
          {currentTestimonial.text}
        </blockquote>
        
        <div className="flex items-center gap-4 lg:gap-6 flex-col sm:flex-row sm:items-center">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-white bg-[#D9D9D9]" />
          
          <div className="flex flex-col items-start gap-2">
            <div className="w-20 h-3">
              <svg width="99" height="14" viewBox="0 0 99 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.07817 0L9.28294 4.58347L14.1563 5.34752L10.6456 8.94432L11.4527 14L7.07817 11.6395L2.70362 14L3.51077 8.94432L0 5.34752L4.8734 4.58347L7.07817 0Z" fill="#E0AE2E"/>
                <path d="M28.2891 0L30.4939 4.58347L35.3673 5.34752L31.8565 8.94432L32.6636 14L28.2891 11.6395L23.9145 14L24.7217 8.94432L21.2109 5.34752L26.0843 4.58347L28.2891 0Z" fill="#E0AE2E"/>
                <path d="M49.5 0L51.7048 4.58347L56.5782 5.34752L53.0674 8.94432L53.8746 14L49.5 11.6395L45.1255 14L45.9326 8.94432L42.4218 5.34752L47.2952 4.58347L49.5 0Z" fill="#E0AE2E"/>
                <path d="M70.7109 0L72.9157 4.58347L77.7891 5.34752L74.2783 8.94432L75.0855 14L70.7109 11.6395L66.3364 14L67.1435 8.94432L63.6327 5.34752L68.5061 4.58347L70.7109 0Z" fill="#E0AE2E"/>
                <path d="M91.9218 0L94.1266 4.58347L99 5.34752L95.4892 8.94432L96.2964 14L91.9218 11.6395L87.5473 14L88.3544 8.94432L84.8437 5.34752L89.7171 4.58347L91.9218 0Z" fill="#E0AE2E"/>
              </svg>
            </div>
            
            <h3 className="text-white text-lg lg:text-xl font-normal tracking-tight">
              {currentTestimonial.author}
            </h3>
            
            <p className="text-white text-sm lg:text-base font-normal">
              {currentTestimonial.role}
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Depoimento anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            aria-label="Próximo depoimento"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex gap-2 relative z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#E0AE2E] w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
