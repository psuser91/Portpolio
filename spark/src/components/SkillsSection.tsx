
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CodeIcon, Database, FileCode, FileText, Monitor, Server } from "lucide-react";

const SkillsSection: React.FC = () => {
  // For progress animation
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skill-progress');
      if (element) {
        const position = element.getBoundingClientRect();
        // If the skills section is visible, trigger the animation
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setShowProgress(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data from resume
  const categories = [
    {
      name: "Languages",
      icon: <FileCode className="w-6 h-6 text-data-purple" />,
      skills: ["Python", "C", "DSA", "HTML", "CSS", "JAVA", "MS-Excel", "SQL", "Machine Learning", "MSWord", "Power-BI"]
    },
    {
      name: "Technologies",
      icon: <Server className="w-6 h-6 text-data-purple" />,
      skills: ["Numpy", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      name: "Concepts",
      icon: <FileText className="w-6 h-6 text-data-purple" />,
      skills: [ "Object Oriented Programming", "Java", "Python"]
    },
    {
      name: "Web Technologies",
      icon: <Monitor className="w-6 h-6 text-data-purple" />,
      skills: ["HTML", "CSS", "JavaScript", "SQL"]
    },
    {
      name: "Data Science",
      icon: <Database className="w-6 h-6 text-data-purple" />,
      skills: ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"]
    }
  ];

  const skillLevels = [
    { name: "Python", level: 85 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Analysis", level: 82 },
    { name: "SQL", level: 70 },
    { name: "HTML/CSS", level: 80 },
    { name: "JavaScript", level: 65 },
  ];

  return (
    <section id="skills" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-data-blue dark:text-data-light mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-data-purple mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've developed a diverse set of skills in data science, programming, and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.name} 
              className="animate-fade-in overflow-hidden hover:shadow-lg transition-all duration-300 dark:bg-gray-800 dark:border-gray-700"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-data-blue to-data-purple p-4 text-white flex items-center">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-2">{category.name}</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={`${category.name}-${skill}`} 
                        variant="outline"
                        className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 px-3 py-1 text-gray-700 dark:text-gray-200 text-sm border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="skill-progress" className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-bold text-data-blue dark:text-data-light mb-6 text-center">Skill Level</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillLevels.map((skill, index) => (
              <div 
                key={skill.name} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
                  <span className="text-data-purple font-medium dark:text-data-light">{skill.level}%</span>
                </div>
                <Progress 
                  value={showProgress ? skill.level : 0} 
                  className="h-2.5 transition-all duration-1000 ease-out"
                  style={{ transitionDelay: `${index * 0.2}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
