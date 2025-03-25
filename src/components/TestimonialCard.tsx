
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, role, company, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-medium h-full flex flex-col">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-foreground/90 italic mb-4 flex-grow">"{quote}"</p>
      
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role}, {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
