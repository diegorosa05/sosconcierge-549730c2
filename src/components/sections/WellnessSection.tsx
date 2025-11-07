import React from 'react';

export const WellnessSection: React.FC = () => {
  return (
    <section className="flex justify-center items-start bg-[#222] py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex w-full max-w-7xl gap-8 lg:gap-12 items-start flex-col lg:flex-row animate-fade-in-up">
        <div className="flex flex-1 flex-col items-start gap-6 lg:gap-8">
          <p className="text-[#E0AE2E] text-sm lg:text-base font-light tracking-widest">
            UMA INICIATIVA S.O.S
          </p>
          <h2 className="font-aboreto text-white text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            S.O.S Wellness Club
          </h2>
          <p className="text-[#DFDFDF] text-base lg:text-lg font-light leading-relaxed">
            Acesso a uma rede selecionada de academias, spas, clínicas e profissionais de saúde e estética. Agendamos, confirmamos, lembramos e acompanhamos cada etapa para você manter o foco no que importa.
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex flex-col">
              <p className="text-white text-sm lg:text-base font-normal">
                Chame agora
              </p>
              <a href="https://wa.me/5511940512450" target="_blank" rel="noopener noreferrer" className="text-[#E0AE2E] text-lg lg:text-xl font-normal hover:underline">
                11 94051-2450
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 flex-1">
          <div className="flex flex-col">
            <div className="w-full h-48 bg-[#D9D9D9] flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-[#452816] text-2xl font-semibold">Em Breve</p>
                <p className="text-[#656565] text-base mt-2">Estamos trabalhando nesta funcionalidade</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#F6F5EE] px-5 py-6">
              <h3 className="text-black text-lg lg:text-xl font-normal tracking-tight">
                Academias & Spas Premium
              </h3>
              <div className="flex flex-col gap-3">
                <p className="text-[#656565] text-sm lg:text-base font-light">Rede exclusiva de parceiros</p>
                <p className="text-[#656565] text-sm lg:text-base font-light">Agendamento facilitado</p>
                <p className="text-[#656565] text-sm lg:text-base font-light">Acompanhamento dedicado</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="w-full h-48 bg-[#D9D9D9] flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-[#452816] text-2xl font-semibold">Em Construção</p>
                <p className="text-[#656565] text-base mt-2">Novidades em desenvolvimento</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#F6F5EE] px-5 py-6">
              <h3 className="text-black text-lg lg:text-xl font-normal tracking-tight">
                Clínicas & Profissionais de Saúde
              </h3>
              <div className="flex flex-col gap-3">
                <p className="text-[#656565] text-sm lg:text-base font-light">Profissionais qualificados</p>
                <p className="text-[#656565] text-sm lg:text-base font-light">Gestão completa de consultas</p>
                <p className="text-[#656565] text-sm lg:text-base font-light">Lembretes automáticos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
