import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import { Shield, Clock, Users, Lock, Award, Sparkles } from 'lucide-react';

export const SpecialtiesSection: React.FC = () => {
  const specialties = [
    {
      title: 'Discrição Absoluta',
      description: 'Sigilo total em todas as operações. Sua privacidade é nossa prioridade máxima em cada tarefa executada.',
      icon: Shield
    },
    {
      title: 'Atendimento Sob Agendamento',
      description: 'Agendamento prévio para garantir disponibilidade total e qualidade premium no atendimento às suas necessidades.',
      icon: Clock
    },
    {
      title: 'Time Especializado',
      description: 'Profissionais treinados para lidar com as mais diversas necessidades com excelência e dedicação.',
      icon: Users
    },
    {
      title: 'Segurança Garantida',
      description: 'Processos rigorosos de verificação e protocolos de segurança em todas as etapas do serviço.',
      icon: Lock
    },
    {
      title: 'Qualidade Premium',
      description: 'Padrão de excelência em cada detalhe, superando expectativas e entregando resultados impecáveis.',
      icon: Award
    },
    {
      title: 'Experiência Personalizada',
      description: 'Soluções sob medida adaptadas ao seu estilo de vida e necessidades específicas.',
      icon: Sparkles
    },
    {
      title: 'Plano 24/7 Premium',
      description: 'Para clientes que precisam de suporte contínuo, oferecemos disponibilidade total em nosso plano mais completo.',
      icon: Award
    }
  ];

  return (
    <section className="flex flex-col justify-center items-start bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex flex-col gap-8 lg:gap-12 w-full max-w-7xl mx-auto animate-fade-in-up">
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          <p className="text-black text-lg lg:text-xl font-light">
            ESPECIALIDADES S.O.S
          </p>
          <h2 className="font-aboreto text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            Como superamos expectativas
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <FeatureCard
              key={index}
              title={specialty.title}
              description={specialty.description}
              icon={specialty.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
