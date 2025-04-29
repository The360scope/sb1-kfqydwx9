import React from 'react';
import { Button } from '../ui/Button';
import { Clock, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/20 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                  Take the first step towards transformative growth. Schedule a strategy call with our experts to see if we're the right fit for your business.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                <div className="flex-1 w-full md:w-auto">
                  <div className="bg-muted/50 rounded-xl p-6 text-center h-full flex flex-col justify-center">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Quick Discovery Call</h3>
                    <p className="text-foreground/70 mb-6">
                      A 30-minute conversation to understand your business and goals.
                    </p>
                    <div className="mt-auto">
                      <Button onClick={() => window.open('https://start.the360scope.com/', '_blank')} className="w-full">
                        Book Your Call
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full md:w-auto">
                  <div className="bg-muted/50 rounded-xl p-6 text-center h-full flex flex-col justify-center">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Mail size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Send Us a Message</h3>
                    <p className="text-foreground/70 mb-6">
                      Have questions? Reach out directly and we'll get back to you.
                    </p>
                    <div className="mt-auto">
                      <Button 
                        variant="secondary" 
                        onClick={() => window.location.href = 'mailto:hello@the360scope.com'} 
                        className="w-full"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="flex items-center">
                  <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <p className="font-medium">support@the360scope.com</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
