
import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  // Handle resume download
  const handleDownloadResume = () => {
    // Create a link pointing to the resume file
    const link = document.createElement("a");
    link.href = "/PradeepResume.pdf"; // Path to your resume file
    link.download = "/PradeepResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-data-blue text-white py-10 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-data-purple mr-2">P</span>radeep Sharma
            </h3>
            <p className="max-w-sm text-gray-300 dark:text-gray-400">
              Data Scientist and Analyst with expertise in artificial intelligence, 
              data science, and machine learning.
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDownloadResume}
              className="mt-4 border-white/30 text-white hover:bg-white/10 dark:border-white/20 dark:hover:bg-white/5"
            >
              <Download className="mr-1 h-4 w-4" /> Download Resume
            </Button>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2 md:items-end">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Pradeep Sharma. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/peuser91" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pradeep-sharma-2674612b3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:pradeep_27aid02@satiengg.in" 
              className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
