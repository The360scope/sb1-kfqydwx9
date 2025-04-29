import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Business', 'Marketing', 'Sales', 'Operations'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      const moveX = (x - 0.5) * 30;
      const moveY = (y - 0.5) * 30;

      const glowX = x * 100;
      const glowY = y * 100;

      heroRef.current.style.setProperty('--x-offset', `${moveX}px`);
      heroRef.current.style.setProperty('--y-offset', `${moveY}px`);
      heroRef.current.style.setProperty('--glow-x', `${glowX}%`);
      heroRef.current.style.setProperty('--glow-y', `${glowY}%`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6"
        style={{
          paddingTop: 'var(--header-h, 80px)',
          '--x-offset': '0px',
          '--y-offset': '0px',
          '--glow-x': '50%',
          '--glow-y': '50%',
      } as React.CSSProperties}
>
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(139, 92, 246, 0.4), rgba(20, 184, 166, 0.3), rgba(236, 72, 153, 0.3), rgba(0, 0, 0, 0.5))',
          transition: 'background 0.3s ease',
        }}
      />

      <div className="max-w-4xl mx-auto z-10 space-y-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2 opacity-0 animate-fade-in">
            <p className="inline-block text-sm md:text-base px-3 py-1 rounded-full bg-muted text-primary font-medium">
              Strategic Marketing Solutions
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transform Your{' '}
              <span className="relative inline-block">
                <span
                  className="absolute transition-all duration-300 ease-in-out"
                  style={{
                    opacity: currentWord === 0 ? 1 : 0,
                    transform: `translateY(${
                      currentWord === 0 ? '0' : '20px'
                    })`,
                  }}
                >
                  Business
                </span>
                <span
                  className="absolute transition-all duration-300 ease-in-out"
                  style={{
                    opacity: currentWord === 1 ? 1 : 0,
                    transform: `translateY(${
                      currentWord === 1 ? '0' : '20px'
                    })`,
                  }}
                >
                  Marketing
                </span>
                <span
                  className="absolute transition-all duration-300 ease-in-out"
                  style={{
                    opacity: currentWord === 2 ? 1 : 0,
                    transform: `translateY(${
                      currentWord === 2 ? '0' : '20px'
                    })`,
                  }}
                >
                  Sales
                </span>
                <span
                  className="absolute transition-all duration-300 ease-in-out"
                  style={{
                    opacity: currentWord === 3 ? 1 : 0,
                    transform: `translateY(${
                      currentWord === 3 ? '0' : '20px'
                    })`,
                  }}
                >
                  Operations
                </span>
                <span className="invisible">Business</span>
              </span>
              <span className="block gradient-text mt-2">The 360 Scope</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto opacity-0 animate-fade-in delay-100">
            Comprehensive marketing strategies and solutions tailored to elevate
            your brand, drive growth, and maximize ROI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in delay-200">
            <Button onClick={() => window.open('https://start.the360scope.com/', '_blank')} size="lg">
              Book a Strategy Call
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
