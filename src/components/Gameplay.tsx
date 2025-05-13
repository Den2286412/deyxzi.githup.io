import React from 'react';
import { Heart, Droplet, Thermometer, Utensils, ShieldAlert, Skull } from 'lucide-react';

const Gameplay: React.FC = () => {
  const survivalMechanics = [
    {
      icon: <Heart className="h-7 w-7 text-error" />,
      title: 'Health',
      description:
        'Monitor your health status. Injuries and illnesses can be fatal if not treated properly.'
    },
    {
      icon: <Droplet className="h-7 w-7 text-blue-400" />,
      title: 'Hydration',
      description:
        'Find clean water sources or purify contaminated water to prevent dehydration.'
    },
    {
      icon: <Utensils className="h-7 w-7 text-yellow-500" />,
      title: 'Hunger',
      description:
        'Hunt animals, gather fruits, or find canned food to maintain your energy levels.'
    },
    {
      icon: <Thermometer className="h-7 w-7 text-text" />,
      title: 'Temperature',
      description:
        'Stay warm with appropriate clothing and fire. Hypothermia can be deadly in the cold nights.'
    },
    {
      icon: <ShieldAlert className="h-7 w-7 text-warning" />,
      title: 'Disease',
      description:
        'Watch for infections, cholera, and other diseases that can be contracted from unsafe practices.'
    },
    {
      icon: <Skull className="h-7 w-7 text-text" />,
      title: 'Permadeath',
      description:
        'When you die, you lose everything and start over. Your story is yours to write.'
    },
  ];

  return (
    <section id="gameplay" className="section bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Survival Mechanics</h2>
            <p className="text-text-muted text-lg mb-8">
              DayZ is a hardcore survival game where your character's needs must be constantly monitored and addressed. Every decision matters, and one mistake could cost you everything.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {survivalMechanics.map((mechanic, index) => (
                <div key={index} className="flex items-start space-x-4 bg-primary/50 p-4 rounded-lg">
                  <div className="mt-1">{mechanic.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{mechanic.title}</h3>
                    <p className="text-sm text-text-muted">{mechanic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <div className="aspect-video bg-primary relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="DayZ Gameplay" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/80 flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                    <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-primary">
                <h3 className="text-xl font-semibold mb-2">Official Gameplay Trailer</h3>
                <p className="text-text-muted">
                  Watch the official gameplay to get a glimpse of the harsh realities of survival in DayZ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gameplay;