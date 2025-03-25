
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link
              to="/"
              className="text-xl font-bold tracking-tight flex items-center space-x-2"
            >
              <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                <span className="font-semibold">A</span>
              </div>
              <span>Agile Reflections</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Transforming teams through expert retrospective guidance and agile coaching.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#free-templates" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Free Templates
                </Link>
              </li>
              <li>
                <Link to="/services#custom-template" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Custom Templates
                </Link>
              </li>
              <li>
                <Link to="/services#template-library" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Template Library
                </Link>
              </li>
              <li>
                <Link to="/services#facilitated-retro" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Facilitated Retrospectives
                </Link>
              </li>
              <li>
                <Link to="/services#agile-consultation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Agile Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Agile Reflections HQ, 123 Scrum Avenue, Kanban City
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a
                  href="mailto:hello@agilereflections.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@agilereflections.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Agile Reflections. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.054,10.054,0,0,1-3.127,1.184,4.92,4.92,0,0,0-8.384,4.482A13.9,13.9,0,0,1,1.64,3.162,4.822,4.822,0,0,0,3.4,9.722,4.9,4.9,0,0,1,1,9.107a4.922,4.922,0,0,0,3.955,4.834,4.964,4.964,0,0,1-2.229.084,4.926,4.926,0,0,0,4.6,3.419A9.9,9.9,0,0,1,0,19.544a13.94,13.94,0,0,0,7.548,2.212A13.909,13.909,0,0,0,21.543,7.82a10.021,10.021,0,0,0,2.41-2.625,9.945,9.945,0,0,1-2.834.767Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
