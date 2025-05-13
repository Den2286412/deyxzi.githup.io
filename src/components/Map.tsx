import React from 'react';
import { MapPin, Info } from 'lucide-react';

const locations = [
  {
    name: 'Chernogorsk',
    type: 'Major City',
    description: 'The largest coastal city, rich in resources but highly contested by players.',
    danger: 'High',
    loot: 'Abundant'
  },
  {
    name: 'NWAF',
    type: 'Military Base',
    description: 'North West Airfield, the most dangerous military installation with the best gear.',
    danger: 'Extreme',
    loot: 'Military Grade'
  },
  {
    name: 'Stary Sobor',
    type: 'Village',
    description: 'A small inland town with a military camp nearby, often a player meetup point.',
    danger: 'Medium',
    loot: 'Moderate'
  },
  {
    name: 'Elektrozavodsk',
    type: 'Coastal City',
    description: 'A large industrial city on the coast, popular among freshspawns.',
    danger: 'Medium-High',
    loot: 'Good'
  },
  {
    name: 'Tisy Military Base',
    type: 'Military Base',
    description: 'Remote northern military base with high-tier loot and dangerous enemies.',
    danger: 'Extreme',
    loot: 'Elite'
  }
];

const Map: React.FC = () => {
  return (
    <section id="map" className="section bg-map-pattern bg-cover bg-fixed">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Explore Chernarus</h2>
          <p className="text-text-muted text-lg">
            Navigate the 225 km² post-Soviet state of Chernarus, featuring cities, villages, forests, mountains, and a dangerous coastline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-text/10">
            <img 
              src="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=1280" 
              alt="Map of Chernarus" 
              className="w-full object-cover"
            />
            
            {/* Map points */}
            <div className="absolute top-[15%] left-[35%]">
              <MapPin className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <div className="absolute top-[40%] left-[75%]">
              <MapPin className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <div className="absolute top-[60%] left-[25%]">
              <MapPin className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <div className="absolute top-[80%] left-[60%]">
              <MapPin className="w-6 h-6 text-accent animate-pulse" />
            </div>
            <div className="absolute top-[25%] left-[55%]">
              <MapPin className="w-6 h-6 text-accent animate-pulse" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Locations</h3>
            
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="bg-secondary/80 backdrop-blur rounded-lg p-4 border-l-4 border-accent"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold">{location.name}</h4>
                    <span className="text-sm py-1 px-2 bg-primary rounded-full text-text-muted">
                      {location.type}
                    </span>
                  </div>
                  <p className="text-text-muted mt-2 text-sm">{location.description}</p>
                  
                  <div className="flex justify-between mt-3 text-sm">
                    <div className="flex items-center">
                      <span className="text-error mr-1">⚠</span>
                      <span>Danger: {location.danger}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-success mr-1">⚙</span>
                      <span>Loot: {location.loot}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-accent/20 rounded-lg flex items-start">
              <Info className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
              <p className="text-sm">
                This interactive map shows key locations in Chernarus. In-game, you'll need to find physical maps or use landmarks to navigate this vast landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;