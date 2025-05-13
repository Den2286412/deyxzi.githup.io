import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-6" />
            <p className="text-text-muted mb-6">
              DayZ is an uncompromising, authentic, open world survival horror hybrid-MMO game, where you follow a single goal: to survive in the harsh post-apocalyptic landscape as long as they can.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-muted hover:text-text transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-text-muted hover:text-text transition-colors">
                  About the Game
                </a>
              </li>
              <li>
                <a href="#gameplay" className="text-text-muted hover:text-text transition-colors">
                  Gameplay
                </a>
              </li>
              <li>
                <a href="#guide" className="text-text-muted hover:text-text transition-colors">
                  Survival Guide
                </a>
              </li>
              <li>
                <a href="#media" className="text-text-muted hover:text-text transition-colors">
                  Media
                </a>
              </li>
              <li>
                <a href="#news" className="text-text-muted hover:text-text transition-colors">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Game Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-muted hover:text-text transition-colors">
                  Official Wiki
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text transition-colors">
                  Community Forums
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text transition-colors">
                  Bug Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text transition-colors">
                  Server Status
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text transition-colors">
                  Download Game
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text transition-colors">
                  Merchandise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-accent mr-3" />
                <span className="text-text-muted">Prague, Czech Republic</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <a href="mailto:info@dayzgame.com" className="text-text-muted hover:text-text transition-colors">
                  info@dayzgame.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <a href="tel:+420123456789" className="text-text-muted hover:text-text transition-colors">
                  +420 123 456 789
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-secondary text-text placeholder:text-text-muted rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent w-full"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-white rounded-r-md px-4 py-2 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-text/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm mb-4 md:mb-0">
            © 2025 DayZ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-text-muted hover:text-text text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-muted hover:text-text text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-text-muted hover:text-text text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;