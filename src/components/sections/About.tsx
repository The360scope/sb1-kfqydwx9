import React from 'react';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const benefits = [
    'Data-driven strategies for measurable results',
    'Experienced team of industry specialists',
    'Holistic approach to marketing and business growth',
    'Transparent reporting and communication',
    'Customized solutions for your unique challenges',
    'Consistent ROI and business scaling'
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-6 opacity-0 animate-fade-in">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold">
              More Than Just Marketing
            </h2>
            <p className="text-3xl md:text-5xl font-bold gradient-text">
              We're Your Growth Partners
            </p>
          </div>
          
          <p className="text-foreground/80 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            At The 360 Scope, we believe in taking a comprehensive approach to your business growth. We don't just focus on one aspect—we analyze your entire operation to identify opportunities and implement strategies that drive real results.
          </p>
          
          <p className="text-foreground/80 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Our team of experts brings years of experience across multiple industries, allowing us to tailor our approach to your specific needs and goals.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle size={20} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-6 text-center">
            <Button onClick={() => window.open('#', '_blank')}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};