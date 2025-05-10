import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 90, color: 'bg-blue-600' },
  { name: 'Java', level: 80, color: 'bg-red-600' },
  { name: 'C', level: 75, color: 'bg-purple-600' },
  { name: 'HTML', level: 85, color: 'bg-orange-600' },
  { name: 'CSS', level: 80, color: 'bg-teal-600' },
  { name: 'JavaScript', level: 75, color: 'bg-yellow-600' },
  { name: 'UI Design', level: 70, color: 'bg-pink-600' },
  { name: 'Problem Solving', level: 85, color: 'bg-green-600' }
];

const SkillBar: React.FC<{ skill: Skill, delay: number }> = ({ skill, delay }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</h3>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500 opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-purple-500 opacity-10 dark:opacity-20 rounded-full blur-3xl"></div>
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
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            Here are the technologies and skills I've acquired throughout my journey.
          </p>
        </div>
        
        <div 
          ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 transition-all duration-1000 ${
            contentAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
            {skills.slice(0, 4).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
            {skills.slice(4).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index + 4} />
            ))}
          </div>
        </div>

        {/* Additional skills visualization */}
        <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Tech Stack</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['Python', 'Java', 'C', 'HTML', 'CSS', 'JavaScript', 'Git', 'UI/UX'].map((tech, index) => (
              <div 
                key={tech}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 hover:shadow-md hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-2xl text-blue-600 dark:text-blue-400">{tech.charAt(0)}</span>
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;