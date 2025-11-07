import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-[#1a1a1a] to-black py-16 lg:py-20 px-6 lg:px-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E0AE2E_1px,transparent_1px),linear-gradient(to_bottom,#E0AE2E_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="relative z-10 flex w-full max-w-7xl mx-auto flex-col gap-12 animate-fade-in-up">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 pb-8 border-b border-white/10">
          <div className="flex-1 flex flex-col items-start gap-6 max-w-md">
            <h3 className="font-aboreto text-white text-3xl lg:text-4xl font-normal tracking-tight">
              <span className="text-[#E0AE2E]">S.O.S</span>
            </h3>
            <p className="text-white/80 text-base lg:text-lg font-light leading-relaxed">
              Concierge premium que cuida de tudo para você focar no essencial. Excelência, discrição e dedicação em cada detalhe.
            </p>
            <div className="flex gap-4 mt-2">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E0AE2E] hover:border-[#E0AE2E] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#E0AE2E] hover:border-[#E0AE2E] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-1 flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex flex-col items-start gap-6">
              <h4 className="font-aboreto text-white text-xl lg:text-2xl font-normal tracking-tight">
                Navegação
              </h4>
              <nav className="flex flex-col items-start gap-3">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/70 text-base lg:text-lg font-light cursor-pointer hover:text-[#E0AE2E] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="flex flex-col items-start gap-6">
              <h4 className="font-aboreto text-white text-xl lg:text-2xl font-normal tracking-tight">
                Contato
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+5511969752460"
                  className="flex items-center gap-3 text-white/70 text-base lg:text-lg font-light hover:text-[#E0AE2E] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E0AE2E] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  +55 11 96975-2460
                </a>
                <a
                  href="mailto:contato@sos.com.br"
                  className="flex items-center gap-3 text-white/70 text-base lg:text-lg font-light hover:text-[#E0AE2E] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#E0AE2E] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  contato@sos.com.br
                </a>
                <div className="flex items-start gap-3 text-white/70 text-base lg:text-lg font-light">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm font-light">
            © {new Date().getFullYear()} S.O.S. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 text-sm font-light hover:text-[#E0AE2E] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/50 text-sm font-light hover:text-[#E0AE2E] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
