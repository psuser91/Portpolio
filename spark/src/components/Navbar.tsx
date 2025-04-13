
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Handle resume download
  const handleDownloadResume = () => {
    // Create a link pointing to the resume file
    const link = document.createElement("a");
    link.href = "/PradeepResume.pdf"; // This should be the path to your resume file
    link.download = "/PradeepResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Navigation items
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-data-blue/90 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <div className="text-xl font-bold text-data-blue dark:text-white relative">
            <span className="text-data-purple">P</span>
            <span className="relative">radeep</span>
            <span className="ml-1 relative">Sharma</span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-data-purple to-data-blue"></div>
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-200 hover:text-data-purple dark:hover:text-data-purple transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownloadResume}
            className="hidden sm:flex"
          >
            <Download className="mr-1 h-4 w-4" /> Resume
          </Button>
          <Toggle 
            pressed={isDarkMode} 
            onPressedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2"
          >
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Toggle>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-1">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="dark:bg-data-blue/95">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-data-purple dark:hover:text-data-purple transition-colors duration-300"
                      >
                        {item}
                      </a>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleDownloadResume}
                      className="mt-4 w-full"
                    >
                      <Download className="mr-1 h-4 w-4" /> Download Resume
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
