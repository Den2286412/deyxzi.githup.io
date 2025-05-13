import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center space-x-2">
        <div className="font-bold text-2xl tracking-wide text-text">
          DAY<span className="text-accent">Z</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;