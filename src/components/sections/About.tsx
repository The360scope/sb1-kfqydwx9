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
    <>
      {/* ─────────────────── Original “About” section ─────────────────── */}
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
              <Button onClick={() => window.open('https://start.the360scope.com/', '_blank')}>
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── New two‑column section ─────────────────── */}
      <section id="expertise-callout" className="py-24 bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-6">
          {/* LEFT COLUMN — text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Booked Calls Tailored <br className="hidden md:block" />
              For Your Sales Team
            </h2>

            <p className="text-muted-foreground">
              We blend real‑time market intelligence with full‑funnel execution so
              your closers spend time talking to people ready to buy—no chasing,
              no convincing.
            </p>

            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Predictive ad targeting driven by live data</li>
              <li>Built-in filters for only high intent leads </li>
              <li>Customer journeys that turn cold leads into warm buyers</li>
            </ul>
          </div>

          {/* RIGHT COLUMN — image */}
          <div className="relative">
            {/* Put your image in /public/images/ and update the path if needed */}
            <img
              src="/lpi.png"
              alt="Illustration of our revenue growth system"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};
