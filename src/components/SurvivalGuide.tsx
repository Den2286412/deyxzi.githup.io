import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const guideSections = [
  {
    title: 'Getting Started',
    content: `
      <p>When you first spawn in DayZ, you'll start on the coast with minimal equipment. Your first priorities should be:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Find water to avoid dehydration</li>
        <li>Look for food in houses and industrial areas</li>
        <li>Find a melee weapon for self-defense</li>
        <li>Get basic clothing for inventory space and warmth</li>
        <li>Move inland for better loot as you gain supplies</li>
      </ul>
    `
  },
  {
    title: 'Food & Water Management',
    content: `
      <p>Staying nourished and hydrated is critical for survival:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Drink from wells in towns (safest water source)</li>
        <li>Purify pond/river water with chlorine tablets or by boiling</li>
        <li>Hunt animals (chickens, deer, cows) for meat</li>
        <li>Gather fruits under trees (apples, pears, plums)</li>
        <li>Check greenhouses for vegetables</li>
        <li>Cook meat thoroughly to avoid food poisoning</li>
      </ul>
    `
  },
  {
    title: 'Medical & Health',
    content: `
      <p>Injuries and illnesses can quickly become fatal:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Use rags or bandages to stop bleeding immediately</li>
        <li>Disinfect wounds with alcohol tincture or iodine</li>
        <li>Treat illnesses with the appropriate medications:</li>
        <li class="ml-5">Tetracycline for bacterial infections</li>
        <li class="ml-5">Charcoal tablets for food poisoning</li>
        <li class="ml-5">Painkillers for pain management</li>
        <li>Monitor your temperature - stay dry and warm</li>
        <li>Blood bags can restore blood loss (matching blood types required)</li>
      </ul>
    `
  },
  {
    title: 'Gear Progression',
    content: `
      <p>As you survive longer, focus on upgrading your equipment:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Civilian areas: Basic weapons, food, starter medical supplies</li>
        <li>Police stations: Better weapons, ammunition, body armor</li>
        <li>Military bases: High-tier weapons, ammunition, and tactical gear</li>
        <li>Medical facilities: Advanced medical supplies</li>
        <li>Car wrecks: Vehicle parts and tools</li>
        <li>Prioritize backpack space for essential survival items</li>
      </ul>
    `
  },
  {
    title: 'Player Interactions',
    content: `
      <p>Perhaps the most unpredictable aspect of DayZ is other players:</p>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Use Voice over IP (VOIP) for communication</li>
        <li>Approach other players with caution - not everyone is friendly</li>
        <li>When in doubt, observe from a distance first</li>
        <li>Use universal signals (jumping, torch flashing) to show peaceful intent</li>
        <li>Trade items with other survivors for mutual benefit</li>
        <li>Form temporary alliances for safety in numbers</li>
        <li>Be prepared to defend yourself if negotiations fail</li>
      </ul>
    `
  }
];

const SurvivalGuide: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="guide" className="section bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Survival Guide</h2>
          <p className="text-text-muted text-lg">
            Essential knowledge and tips to help you survive longer in the harsh world of DayZ. From basic survival to advanced tactics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {guideSections.map((section, index) => (
              <div 
                key={index} 
                className="border border-text/10 rounded-lg overflow-hidden"
              >
                <button
                  className={`w-full text-left p-5 flex justify-between items-center ${
                    activeIndex === index ? 'bg-secondary' : 'bg-secondary/50'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-accent" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-text-muted" />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ${
                    activeIndex === index 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div 
                    className="p-5 bg-primary border-t border-text/10 text-text-muted"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 bg-secondary/30 rounded-lg border border-text/10">
            <h3 className="text-xl font-semibold mb-3">Remember</h3>
            <p className="text-text-muted">
              In DayZ, death is permanent and you will lose all your equipment when you die. 
              Take your time, plan carefully, and always be aware of your surroundings. 
              The experiences and stories you create are what make DayZ unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurvivalGuide;