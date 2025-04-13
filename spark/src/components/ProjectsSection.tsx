
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A complete library management system with user authentication, book catalog, and borrowing features.",
      tags: ["HTML", "CSS", "JavaScript", "SQL"],
      githubLink: "https://github.com/peuser91",
      liveLink: "#"
    },
    {
      title: "E-Commerce Shopping Application",
      description: "Developed a user-friendly e-commerce platform for online shopping. Ensured responsive design for optimal performance on both mobile and desktop devices.",
      tags: ["HTML", "CSS", "JavaScript", "Git"],
      githubLink: "https://github.com/peuser91",
      liveLink: "#"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for data visualization and analytics using Python and data science libraries.",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      githubLink: "https://github.com/peuser91",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-data-blue dark:text-data-light mb-4">Projects</h2>
          <div className="h-1 w-20 bg-data-purple mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in data science and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col h-full dark:bg-gray-700 dark:border-gray-600"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader className="bg-gradient-to-r from-data-blue/10 to-data-purple/10 dark:from-data-blue/20 dark:to-data-purple/20">
                <CardTitle className="text-data-blue dark:text-data-light">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow py-6">
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={`${project.title}-${tag}`} variant="outline" className="bg-white dark:bg-gray-600 dark:text-gray-200 dark:border-gray-500">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-600 flex justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-data-purple dark:hover:text-data-purple transition-colors flex items-center gap-1 text-sm"
                >
                  <Github size={16} /> GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-data-purple dark:hover:text-data-purple transition-colors flex items-center gap-1 text-sm"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
