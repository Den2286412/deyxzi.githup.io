import React, { useState } from 'react';

const Media: React.FC = () => {
  const [activeTab, setActiveTab] = useState('screenshots');

  const screenshots = [
    {
      url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Abandoned Village at Sunset',
      description: 'An eerie abandoned settlement as dusk falls over Chernarus.'
    },
    {
      url: 'https://images.pexels.com/photos/6605308/pexels-photo-6605308.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Military Outpost',
      description: 'A heavily guarded military checkpoint with valuable supplies.'
    },
    {
      url: 'https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Forest Wilderness',
      description: 'Navigating dense forests can provide cover but also hide threats.'
    },
    {
      url: 'https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Coastal Town',
      description: 'Coastal areas are where most survivors begin their journey.'
    },
    {
      url: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Night Operations',
      description: 'The darkness brings new dangers but also opportunities for stealth.'
    },
    {
      url: 'https://images.pexels.com/photos/300857/pexels-photo-300857.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Urban Exploration',
      description: 'Cities contain valuable loot but are often contested by both infected and players.'
    }
  ];

  const videos = [
    {
      thumbnailUrl: 'https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'DayZ Official Gameplay Trailer',
      description: 'The official gameplay trailer showing the harsh realities of survival in DayZ.'
    },
    {
      thumbnailUrl: 'https://images.pexels.com/photos/2034373/pexels-photo-2034373.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Survival Guide for Beginners',
      description: 'Essential tips and strategies for newcomers to survive their first days.'
    },
    {
      thumbnailUrl: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Advanced Combat Tactics',
      description: 'Learn the finer points of PvP combat from experienced players.'
    },
    {
      thumbnailUrl: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Base Building Tutorial',
      description: 'Comprehensive guide to constructing and securing your base.'
    }
  ];

  return (
    <section id="media" className="section bg-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Media Gallery</h2>
          <p className="text-text-muted text-lg">
            Explore the visual world of DayZ through gameplay screenshots and videos. Get a glimpse of what awaits you in Chernarus.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('screenshots')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg focus:outline-none ${
                activeTab === 'screenshots'
                  ? 'bg-accent text-white'
                  : 'bg-primary text-text hover:bg-primary/70'
              }`}
            >
              Screenshots
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg focus:outline-none ${
                activeTab === 'videos'
                  ? 'bg-accent text-white'
                  : 'bg-primary text-text hover:bg-primary/70'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {activeTab === 'screenshots' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-lg bg-primary hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.title}
                    className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{screenshot.title}</h3>
                  <p className="text-text-muted text-sm">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-lg bg-primary hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnailUrl} 
                    alt={video.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/80 flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <p className="text-text-muted text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Media;