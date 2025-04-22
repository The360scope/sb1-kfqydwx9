import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
}) => {
  return (
    <div 
      className="service-card opacity-0 animate-fade-in"
      style={{ '--card-color': color } as React.CSSProperties}
    >
      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full opacity-20 blur-xl"
        style={{ backgroundColor: color }}
      />
      
      <div className={`inline-flex p-3 rounded-xl mb-5`}
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={28} style={{ color }} />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
};