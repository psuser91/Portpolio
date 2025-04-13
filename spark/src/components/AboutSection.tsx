
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, GraduationCap, School } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-data-blue dark:text-data-light mb-4">About Me</h2>
          <div className="h-1 w-20 bg-data-purple mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a fresher Data Scientist and Analyst with a B.Tech in Artificial Intelligence and Data Science 
            from Samrat Ashok Technological Institute Vidisha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-data-blue dark:text-data-light mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h3>
            <div className="space-y-6">
              <Card className="transition-transform hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-data-blue dark:text-data-light">B.Tech in AI and Data Science</h4>
                      <p className="text-gray-600 dark:text-gray-300">Samrat Ashok Technological Institute Vidisha</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">CSE(AIDS) - Artificial Intelligence and Data Science</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-data-purple/10 text-data-purple dark:bg-data-purple/20 dark:text-data-light px-3 py-1 rounded-full text-sm">
                        2023-2026
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transition-transform hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-data-blue dark:text-data-light">Polytechnic Diploma</h4>
                      <p className="text-gray-600 dark:text-gray-300">Government Polytechnic College Morena, M.P.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">CSE</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-data-purple/10 text-data-purple dark:bg-data-purple/20 dark:text-data-light px-3 py-1 rounded-full text-sm">
                        2020-2023
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transition-transform hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-data-blue dark:text-data-light">DCA Diploma</h4>
                      <p className="text-gray-600 dark:text-gray-300">Account world Morena M.P.</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-data-purple/10 text-data-purple dark:bg-data-purple/20 dark:text-data-light px-3 py-1 rounded-full text-sm">
                        2019-2020
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-data-blue dark:text-data-light mb-6 flex items-center">
              <School className="mr-2" /> School Education
            </h3>
            <div className="space-y-6">
              <Card className="transition-transform hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-data-blue dark:text-data-light">Higher Secondary Education</h4>
                      <p className="text-gray-600 dark:text-gray-300">Government High Secondary School Mirghan, Morena M.P.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Math</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-data-purple/10 text-data-purple dark:bg-data-purple/20 dark:text-data-light px-3 py-1 rounded-full text-sm">
                        12th - 2018-2019
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transition-transform hover:translate-y-[-5px] dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold text-data-blue dark:text-data-light">High School Education</h4>
                      <p className="text-gray-600 dark:text-gray-300">Government High Secondary School Mirghan, Morena M.P.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Science</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-data-purple/10 text-data-purple dark:bg-data-purple/20 dark:text-data-light px-3 py-1 rounded-full text-sm">
                        10th - 2015-2016
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold text-data-blue dark:text-data-light mb-4 flex items-center">
                  <Clock className="mr-2" /> Languages
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                    <p className="font-medium dark:text-gray-200">English</p>
                    <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded">
                      <div className="h-full bg-data-purple rounded" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm text-center">
                    <p className="font-medium dark:text-gray-200">Hindi</p>
                    <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded">
                      <div className="h-full bg-data-purple rounded" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-2">
                <h4 className="text-xl font-bold text-data-blue dark:text-data-light mb-4 flex items-center">
                  <BookOpen className="mr-2" /> Hobbies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Travel", "Coding", "Playing Cricket"].map((hobby) => (
                    <span key={hobby} className="bg-white dark:bg-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-sm">
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
