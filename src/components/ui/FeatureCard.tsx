import React from 'react';
import { LucideIcon } from 'lucide-react';
interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}
export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className = ''
}) => {
  return (
    <div className={`flex w-full flex-col items-start gap-4 border bg-white px-6 py-6 border-solid border-[#B6B6B6] hover:shadow-lg transition-shadow ${className}`}>
      <div className="">
        <Icon className="w-8 h-8 text-[#E0AE2E]" />
      </div>
      <h3 className="font-aboreto text-black text-xl lg:text-2xl font-normal tracking-tight">
        {title}
      </h3>
      <p className="text-black text-base lg:text-lg font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};