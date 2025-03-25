
import React, { useEffect } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Contact Header */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Contact Us</h1>
            <p className="subtitle-large">
              Reach out to discuss how we can help transform your team's retrospectives and agile practices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <div className="bg-white/80 backdrop-blur-sm border border-border/40 rounded-2xl p-8 shadow-subtle">
                <h2 className="heading-3 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-subtle">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin size={20} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Agile Reflections HQ<br />
                      123 Scrum Avenue<br />
                      Kanban City, AC 12345
                    </span>
                  </li>
                  
                  <li className="flex items-center">
                    <Mail size={20} className="mr-3 text-primary shrink-0" />
                    <a
                      href="mailto:hello@agilereflections.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@agilereflections.com
                    </a>
                  </li>
                  
                  <li className="flex items-center">
                    <Phone size={20} className="mr-3 text-primary shrink-0" />
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-subtle">
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock size={20} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <p className="text-foreground">9:00 AM - 5:00 PM</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock size={20} className="mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Saturday - Sunday:</span>
                      <p className="text-foreground">Closed</p>
                    </div>
                  </li>
                </ul>
                
                <p className="mt-4 text-sm text-muted-foreground">
                  Virtual consultations available outside of regular business hours by appointment.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm border border-border/40 rounded-2xl p-6 shadow-subtle">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                    </svg>
                  </a>
                  
                  <a
                    href="#"
                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.054,10.054,0,0,1-3.127,1.184,4.92,4.92,0,0,0-8.384,4.482A13.9,13.9,0,0,1,1.64,3.162,4.822,4.822,0,0,0,3.4,9.722,4.9,4.9,0,0,1,1,9.107a4.922,4.922,0,0,0,3.955,4.834,4.964,4.964,0,0,1-2.229.084,4.926,4.926,0,0,0,4.6,3.419A9.9,9.9,0,0,1,0,19.544a13.94,13.94,0,0,0,7.548,2.212A13.909,13.909,0,0,0,21.543,7.82a10.021,10.021,0,0,0,2.41-2.625,9.945,9.945,0,0,1-2.834.767Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map (Placeholder) */}
      <section className="py-8">
        <div className="container-custom">
          <div className="bg-secondary/50 border border-border/40 rounded-2xl overflow-hidden h-80 shadow-subtle">
            {/* Replace with actual Google Map embed if available */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
