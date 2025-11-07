import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WellnessSection } from '../components/sections/WellnessSection';
import { CTASection } from '../components/sections/CTASection';
import { SpecialtiesSection } from '../components/sections/SpecialtiesSection';
import { TestimonialsCarousel } from '../components/sections/TestimonialsCarousel';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { FooterSection } from '../components/sections/FooterSection';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';

const Index = () => {
  return (
    <main className="w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WellnessSection />
      <CTASection />
      <SpecialtiesSection />
      <TestimonialsCarousel />
      <FeaturesSection />
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
