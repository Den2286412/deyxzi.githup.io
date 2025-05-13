import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const NavLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Gameplay', path: '#gameplay' },
  { name: 'Map', path: '#map' },
  { name: 'Survival Guide', path: '#guide' },
  { name: 'Media', path: '#media' },
  { name: 'News', path: '#news' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = NavLinks.map(link => link.path.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop py-3 shadow-lg' : 'py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#home" className="inline-block">
            <Logo className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`nav-link ${activeSection === link.path.substring(1) ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="btn btn-primary">
              Play Now
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-text-muted hover:text-text"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden ${
          isOpen ? 'block animate-fadeIn' : 'hidden'
        } backdrop`}
      >
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-4">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`nav-link ${activeSection === link.path.substring(1) ? 'active' : ''} block py-2`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="btn btn-primary mt-2 w-full text-center">
              Play Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;