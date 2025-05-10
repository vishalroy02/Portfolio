import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">V</span>ishal
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              A passionate software developer with a focus on creating innovative and user-friendly applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover-target w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/vishal-roy-a930b7214" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover-target w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:royv07237@gmail.com" 
                className="hover-target w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Vishal Kumar Roy. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> using React and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;