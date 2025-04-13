
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-data-blue mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-data-purple mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out to me for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-data-blue mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-data-purple/10 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-data-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Phone</h4>
                    <p className="text-gray-600 mt-1">+919165165204</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-data-purple/10 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-data-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600 mt-1">pradeep_27aid02@satiengg.in</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-data-purple/10 p-3 rounded-full">
                    <Github className="w-5 h-5 text-data-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">GitHub</h4>
                    <a 
                      href="https://github.com/peuser91" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-data-purple hover:underline mt-1 inline-block"
                    >
                      github.com/peuser91
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="bg-data-purple/10 p-3 rounded-full">
                    <Linkedin className="w-5 h-5 text-data-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/pradeep-sharma-2674612b3" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-data-purple hover:underline mt-1 inline-block"
                    >
                      linkedin.com/in/pradeep-sharma-2674612b3
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-data-blue mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="border-gray-300 focus:border-data-purple focus:ring-data-purple"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-gray-300 focus:border-data-purple focus:ring-data-purple"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="border-gray-300 focus:border-data-purple focus:ring-data-purple"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="border-gray-300 focus:border-data-purple focus:ring-data-purple resize-none"
                />
              </div>
              <div>
                <Button className="w-full bg-data-purple hover:bg-purple-700">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
