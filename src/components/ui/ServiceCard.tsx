import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  image: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon: Icon, image, className = '' }) => {
  return (
    <div className={`relative flex w-full h-64 lg:h-80 flex-col justify-end items-start overflow-hidden group ${className}`}>
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      <div className="relative z-10 px-6 lg:px-8 py-8 lg:py-10 w-full">
        <h3 className="font-aboreto text-white text-xl lg:text-2xl font-normal tracking-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};
