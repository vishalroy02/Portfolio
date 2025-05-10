import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Laptop, Lightbulb } from 'lucide-react';
import vishalPic from './vishal.png'; 

const About: React.FC = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-64 h-64 bg-green-500 opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div 
          ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-1000 ${
            contentAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* About Me Content */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Vishal Kumar Roy, a Computer Science undergraduate with a passion for creating 
              modern, innovative applications. I enjoy tackling challenging problems and building 
              solutions that combine functionality with great user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My journey in programming started with Python and has since expanded to include various 
              languages and technologies. I'm constantly learning and exploring new ways to improve 
              my skills and create better software.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Building clean, efficient applications</p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Laptop className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">Design</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Creating intuitive user interfaces</p>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Finding creative solutions to problems</p>
              </div>
            </div>
          </div>
          
          {/* About Image */}
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-full max-w-md">
  <img 
    src={vishalPic} 
    alt="Vishal Kumar Roy" 
    className="w-full h-auto object-cover rounded-2xl shadow-xl" 
  />
</div>
      
      {/* Scrolling Text */}
      <div className="w-full overflow-hidden mt-20">
        <div className="py-4 bg-blue-600 dark:bg-blue-800 text-white">
          <div className="marquee-container">
            <div className="marquee">
              <span>PYTHON</span>
              <span>•</span>
              <span>JAVA</span>
              <span>•</span>
              <span>C</span>
              <span>•</span>
              <span>HTML</span>
              <span>•</span>
              <span>CSS</span>
              <span>•</span>
              <span>JAVASCRIPT</span>
              <span>•</span>
              <span>PROBLEM SOLVING</span>
              <span>•</span>
              <span>UI DESIGN</span>
              <span>•</span>
            </div>
            <div className="marquee marquee2">
              <span>PYTHON</span>
              <span>•</span>
              <span>JAVA</span>
              <span>•</span>
              <span>C</span>
              <span>•</span>
              <span>HTML</span>
              <span>•</span>
              <span>CSS</span>
              <span>•</span>
              <span>JAVASCRIPT</span>
              <span>•</span>
              <span>PROBLEM SOLVING</span>
              <span>•</span>
              <span>UI DESIGN</span>
              <span>•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
