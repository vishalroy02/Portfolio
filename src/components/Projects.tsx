import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  background: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Snake Game",
    description: "A classic Snake game built with Python and Pygame. Features multiple difficulty levels and score tracking.",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Pygame"],
    github: "https://github.com",
    background: "from-green-600 to-blue-600"
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    description: "A responsive two-player Tic Tac Toe game built with HTML, CSS, and JavaScript that works on all devices.",
    image: "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com",
    link: "https://example.com",
    background: "from-blue-600 to-purple-600"
  },
  {
    id: 3,
    title: "StudentSphere",
    description: "A decentralized student platform with features for posts, chat, resume building, and theme customization.",
    image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Firebase"],
    github: "https://github.com",
    background: "from-purple-600 to-pink-600"
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });
  const cardsAnimation = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background that changes based on active project */}
      <div className={`absolute inset-0 transition-all duration-1000 ease-in-out bg-white dark:bg-gray-900`}>
        {activeProject && (
          <div className={`absolute inset-0 opacity-10 dark:opacity-20 bg-gradient-to-br ${activeProject.background} blur-3xl transition-all duration-1000 transform scale-110`}></div>
        )}
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white relative inline-block group">
            My Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Here are some of the projects I've worked on. Hover over a project to see more details.
          </p>
        </div>
        
        <div 
          ref={cardsAnimation.ref as React.RefObject<HTMLDivElement>} 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            cardsAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative hover-target"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-70"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center space-x-4 mt-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <span className="ml-auto transform transition-transform duration-300 group-hover:translate-x-2">
                      <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;