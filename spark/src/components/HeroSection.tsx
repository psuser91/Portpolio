
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Database, BarChart2, PieChart } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-data-blue/30 transition-colors duration-500 -z-10"></div>
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-6xl font-bold text-data-blue dark:text-white mb-4">
            Hi, I'm{" "}
            <span className="text-data-purple relative">
              Pradeep Sharma
              <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-data-purple to-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Data Scientist & Analyst
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            Specializing in artificial intelligence, data analysis, and machine learning.
            I transform complex data into actionable insights and build intelligent solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-data-purple hover:bg-purple-700 dark:bg-data-purple/90 dark:hover:bg-data-purple">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" className="border-data-purple text-data-purple hover:bg-data-purple/10 dark:border-data-purple/80 dark:text-data-purple/90 dark:hover:bg-data-purple/20">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex space-x-4 mt-8">
            <a 
              href="https://github.com/peuser91" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-data-purple dark:text-gray-400 dark:hover:text-data-purple transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pradeep-sharma-2674612b3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-data-purple dark:text-gray-400 dark:hover:text-data-purple transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:pradeep_27aid02@satiengg.in" 
              className="text-gray-700 hover:text-data-purple dark:text-gray-400 dark:hover:text-data-purple transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative flex justify-center items-center">
            {/* Enhanced creative logo */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Main circle with gradient and glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-data-purple via-blue-500 to-data-blue opacity-90 dark:opacity-80 animate-glow"></div>
              
              {/* Inner circle */}
              <div className="absolute inset-8 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 opacity-20 dark:opacity-30 animate-pulse-slow"></div>
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute inset-0 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                  <Database className="h-8 w-8 text-data-purple" />
                </div>
              </div>
              
              <div className="absolute inset-0 animate-float" style={{ animationDelay: "2.2s" }}>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                  <BarChart2 className="h-8 w-8 text-data-blue" />
                </div>
              </div>
              
              <div className="absolute inset-0 animate-float" style={{ animationDelay: "1.3s" }}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                  <PieChart className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div>
                  <div className="text-lg font-bold text-white dark:text-white animate-pulse-slow">Data Science</div>
                  <div className="text-md text-white dark:text-white mt-2 animate-pulse-slow" style={{ animationDelay: "1s" }}>Machine Learning</div>
                  <div className="text-sm text-white dark:text-white mt-2 animate-pulse-slow" style={{ animationDelay: "2s" }}>AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
