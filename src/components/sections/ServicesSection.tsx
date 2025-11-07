import React from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import { Calendar, FileText, Home, Heart, Briefcase } from 'lucide-react';
import serviceAgenda from '@/assets/service-agenda.jpg';
import serviceHome from '@/assets/service-home.jpg';
import serviceWellness from '@/assets/service-wellness.jpg';
import serviceExecutive from '@/assets/service-executive.jpg';
import serviceFinancialAdmin from '@/assets/service-financial-admin.jpg';

export const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Gestão de Agenda', icon: Calendar, image: serviceAgenda },
    { title: 'Gestão Administrativa e Financeira Pessoal', icon: FileText, image: serviceFinancialAdmin },
    { title: 'Gestão Residencial', icon: Home, image: serviceHome },
    { title: 'Bem-estar & Saúde', icon: Heart, image: serviceWellness },
    { title: 'Suporte Executivo', icon: Briefcase, image: serviceExecutive }
  ];

  return (
    <section id="services" className="flex flex-col justify-center items-center bg-[#F6F5EE] py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex w-full max-w-7xl flex-col items-start gap-8 lg:gap-12 animate-fade-in-up">
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          <p className="text-black text-lg lg:text-xl font-light">
            O que resolvemos por você (sob agendamento para melhor disponibilidade)
          </p>
          <h2 className="font-aboreto text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            Serviços e Soluções
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
