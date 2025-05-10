import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const typedText = useTypewriter([
    'Developer',
    'Problem Solver',
    'Designer',
    'Innovator'
  ], {
    typingSpeed: 100,
    deletingSpeed: 50,
    delayAfterType: 2000,
    delayAfterDelete: 500
  });

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-500 opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div 
        ref={ref as React.RefObject<HTMLDivElement>} 
        className={`container mx-auto px-6 z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Hello, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400 relative inline-block">
              Vishal
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
            </span>
          </h1>

          <div className="h-12 md:h-16 mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              I'm a{' '}
              <span className="text-blue-600 dark:text-blue-400 inline-block min-w-32 relative after:content-[''] after:absolute after:w-full after:h-[3px] after:-bottom-1 after:left-0 after:bg-blue-600 dark:after:bg-blue-400">
                {typedText}
                <span className="animate-blink ml-1">|</span>
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Motivated CS student experienced in Python, C, Java, HTML, CSS, and JavaScript.
            Interested in building innovative, modern UI-based applications and platforms.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <a 
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover-target bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover-target border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover-target"
        onClick={scrollToNext}
      >
        <ChevronDown className="h-8 w-8 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;