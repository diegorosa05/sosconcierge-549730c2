import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "O que é um serviço de concierge premium em São Paulo?",
      answer: "Um concierge premium é um assistente pessoal dedicado que resolve suas tarefas secundárias para que seu tempo se torne primário. Cuidamos de agenda, burocracias, gestão residencial, bem-estar e suporte executivo em São Paulo e região, permitindo que você foque apenas no essencial."
    },
    {
      question: "Como funciona o atendimento sob agendamento?",
      answer: "Trabalhamos com agendamento prévio para garantir disponibilidade total e qualidade premium. Após o primeiro contato via WhatsApp (11) 94051-2450, agendamos uma reunião para entender suas necessidades e criar um plano personalizado de atendimento."
    },
    {
      question: "Quais regiões de São Paulo são atendidas pela S.O.S?",
      answer: "Atendemos toda São Paulo, com foco especial na região da Paulista e zona sul. Nossa cobertura inclui toda a região metropolitana de São Paulo, sempre com o mesmo padrão de excelência e discrição absoluta."
    },
    {
      question: "Qual a diferença entre o serviço regular e o plano 24/7 premium?",
      answer: "Nosso serviço regular funciona sob agendamento com horário comercial estendido. O plano 24/7 premium oferece disponibilidade total a qualquer hora, ideal para executivos e famílias que precisam de suporte contínuo e imediato em situações urgentes."
    },
    {
      question: "Como é garantida a privacidade e discrição dos clientes?",
      answer: "Discrição absoluta é nossa prioridade máxima. Todos os profissionais assinam acordos de confidencialidade rigorosos, seguimos protocolos de segurança em todas as etapas e nunca compartilhamos informações de clientes. Sua privacidade é tratada com máximo sigilo."
    },
    {
      question: "Que tipos de tarefas o concierge premium pode resolver?",
      answer: "Resolvemos gestão de agenda e compromissos, administração financeira pessoal, gestão residencial (manutenção, fornecedores, reformas), agendamentos de bem-estar e saúde, suporte executivo, planejamento de eventos familiares e muito mais. Se consome seu tempo, nós cuidamos."
    },
    {
      question: "Quanto custa um serviço de concierge personalizado em SP?",
      answer: "Nossos planos são personalizados de acordo com suas necessidades específicas. Entre em contato pelo WhatsApp (11) 94051-2450 para agendar uma consulta inicial gratuita, onde entenderemos seu perfil e apresentaremos as melhores opções de investimento."
    },
    {
      question: "Preciso de contrato de longo prazo?",
      answer: "Oferecemos flexibilidade total. Você pode optar por planos mensais, trimestrais ou anuais. Também atendemos demandas pontuais sob agendamento. Nossa prioridade é adaptar o serviço ao seu estilo de vida e necessidades."
    },
    {
      question: "Como começar a usar os serviços da S.O.S?",
      answer: "Simples! Chame agora pelo WhatsApp (11) 94051-2450 para agendar uma reunião inicial. Conheceremos suas necessidades, apresentaremos nossas soluções e criaremos um plano personalizado. O primeiro contato é sem compromisso."
    },
    {
      question: "A S.O.S atende clientes corporativos?",
      answer: "Sim! Além de atender famílias e executivos individualmente, oferecemos suporte executivo corporativo para empresas que desejam proporcionar serviços de concierge premium como benefício diferenciado para seus colaboradores de alta performance."
    }
  ];

  return (
    <section id="faq" className="flex flex-col justify-center items-center bg-white py-16 lg:py-24 px-6 lg:px-20">
      <div className="flex w-full max-w-4xl flex-col items-start gap-8 lg:gap-12 animate-fade-in-up">
        <div className="flex flex-col items-center gap-4 lg:gap-6 w-full text-center">
          <p className="text-black text-lg lg:text-xl font-light">
            DÚVIDAS FREQUENTES
          </p>
          <h2 className="font-aboreto text-black text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight">
            Perguntas Frequentes sobre Concierge Premium
          </h2>
          <p className="text-[#4C4C4C] text-base lg:text-lg font-light leading-relaxed max-w-2xl">
            Tire suas dúvidas sobre nossos serviços de concierge personalizado em São Paulo
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left py-6 text-base lg:text-lg font-normal text-black hover:text-[#E0AE2E] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#4C4C4C] text-base lg:text-lg font-light leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="w-full flex flex-col items-center gap-4 mt-8 p-8 bg-[#F6F5EE] rounded-lg">
          <p className="text-black text-lg lg:text-xl font-normal text-center">
            Ainda tem dúvidas? Chame agora e fale com nossa equipe
          </p>
          <a 
            href="https://wa.me/5511940512450" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E0AE2E] text-white text-base lg:text-lg font-normal rounded-lg hover:bg-[#C9991F] transition-colors"
          >
            (11) 94051-2450 - WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
