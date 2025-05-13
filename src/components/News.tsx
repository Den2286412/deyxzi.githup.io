import React from 'react';
import { Calendar, User, ExternalLink } from 'lucide-react';

const newsItems = [
  {
    title: 'DayZ Update 1.23 Released',
    date: 'June 15, 2025',
    author: 'DayZ Team',
    excerpt: 'The latest update brings new weapons, improved weather systems, and critical bug fixes to enhance gameplay.',
    tags: ['Update', 'New Content']
  },
  {
    title: 'Winter Event Coming to Chernarus',
    date: 'May 28, 2025',
    author: 'DayZ Team',
    excerpt: 'Prepare for harsh winter conditions, new seasonal items, and challenging survival scenarios in our upcoming Winter Event.',
    tags: ['Event', 'Limited Time']
  },
  {
    title: 'Community Spotlight: Best Base Designs',
    date: 'May 10, 2025',
    author: 'Community Manager',
    excerpt: 'Check out these impressive and ingenious base designs created by our community members.',
    tags: ['Community', 'Showcase']
  },
  {
    title: 'Security Update: Anti-Cheat Improvements',
    date: 'April 22, 2025',
    author: 'Development Team',
    excerpt: 'We\'re implementing new measures to combat cheating and ensure fair gameplay for all survivors.',
    tags: ['Security', 'Gameplay']
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="section bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Latest News</h2>
          <p className="text-text-muted text-lg">
            Stay updated with the latest developments, updates, and events happening in the world of DayZ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4">
                    {news.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                <p className="text-text-muted mb-4">{news.excerpt}</p>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-text/10">
                  <div className="flex items-center text-sm text-text-muted">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{news.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{news.author}</span>
                    </div>
                  </div>
                  
                  <a href="#" className="flex items-center text-accent hover:text-accent/80 text-sm font-medium">
                    Read More <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn btn-outline">
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;