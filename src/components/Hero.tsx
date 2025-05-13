import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text mb-4 animate-slideUp">
            SURVIVE. <span className="text-accent">ADAPT.</span> OVERCOME.
          </h1>
          <p className="text-lg sm:text-xl text-text/90 mb-8 max-w-2xl animate-slideUp delay-100">
            In a post-apocalyptic world ravaged by an unknown infection, every decision counts. 
            Scavenge for supplies, face the infected, and decide whether to cooperate or compete with other survivors.
          </p>
          <div className="flex flex-wrap gap-4 animate-slideUp delay-200">
            <a href="#" className="btn btn-primary">
              Play Now
            </a>
            <a href="#gameplay" className="btn btn-outline">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent"></div>
    </section>
  );
};

export default Hero;