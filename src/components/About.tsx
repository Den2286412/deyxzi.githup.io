import React from 'react';
import { BarChart2, Shield, Users, Map } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: 'Survival',
    description:
      'Manage your hunger, thirst, temperature, and health to stay alive in a harsh environment where every resource matters.'
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Multiplayer',
    description:
      'Interact with other players in a persistent open world. Form alliances or engage in PvP combat for valuable resources.'
  },
  {
    icon: <Map className="h-8 w-8 text-accent" />,
    title: 'Vast World',
    description:
      'Explore the 225 km² post-Soviet state of Chernarus with abandoned towns, military bases, and wilderness.'
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-accent" />,
    title: 'Progression',
    description:
      'Collect weapons, gear, and supplies to improve your chances of survival as you venture deeper into dangerous territories.'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About DayZ</h2>
          <p className="text-text-muted text-lg">
            DayZ is an unforgiving, authentic, open world sandbox survival game where each one of 60 players on a server follows a single goal - to survive as long as they can, by all means necessary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;