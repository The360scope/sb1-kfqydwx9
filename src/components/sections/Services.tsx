import React, { useEffect, useRef } from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import {
  PenTool,
  BarChart3,
  TrendingUp,
  Package2,
  HeartHandshake,
  Database,
} from 'lucide-react';

export const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: 'Marketing',
      description:
        'Data-driven Google and Facebook ad campaigns optimized for maximum reach, engagement, and conversion.',
      color: '#3B82F6', // Blue
    },
    {
      icon: PenTool,
      title: 'Copy & Creatives',
      description:
        'Compelling content and eye-catching designs that captivate your audience and communicate your brand message effectively.',
      color: '#9333EA', // Purple
    },
    {
      icon: Database,
      title: 'AI Data & Tracking',
      description:
        'Leveraging advanced AI and analytics to track performance, gather insights, and drive data-informed decisions.',
      color: '#22C55E', // Green
    },
    {
      icon: HeartHandshake,
      title: 'Sales',
      description:
        'Converting prospects into loyal customers with proven sales strategies, scripts, and frameworks.',
      color: '#F97316', // Orange
    },
    {
      icon: Package2,
      title: 'Offer & Fulfillment',
      description:
        'Development and optimization of your product offers with seamless fulfillment strategies that delight customers.',
      color: '#EC4899', // Pink
    },
    {
      icon: BarChart3,
      title: 'Operations & Leadership',
      description:
        'Strategic guidance and operational frameworks to streamline your business processes and drive sustainable growth.',
      color: '#14B8A6', // Teal
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(147, 51, 234, 0.3) 0%, rgba(0, 0, 0, 0) 20%), radial-gradient(circle at 90% 50%, rgba(20, 184, 166, 0.3) 0%, rgba(0, 0, 0, 0) 25%), radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, rgba(0, 0, 0, 0) 30%)',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/70 text-lg">
            Comprehensive solutions designed to take your business to the next
            level with our 360° approach.
          </p>
        </div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
