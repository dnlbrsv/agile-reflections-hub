
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, link, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white/70 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-subtle transition-all duration-300 hover:shadow-medium group",
        className
      )}
    >
      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="heading-4 mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
