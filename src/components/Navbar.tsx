
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-foreground tracking-tight flex items-center space-x-2"
        >
          <div className="h-8 w-8 rounded-md bg-primary/10 text-primary flex items-center justify-center">
            <span className="font-semibold">A</span>
          </div>
          <span>Agile Reflections</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100',
                location.pathname === link.path
                  ? 'text-primary after:scale-x-100 after:origin-bottom-left'
                  : 'text-foreground/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-primary text-white rounded-full px-6 py-2 text-sm font-medium transition-all hover:shadow-md hover:bg-primary/90"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md md:hidden animate-slide-in">
            <div className="container-custom py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-4 py-3 rounded-md text-base font-medium transition-colors',
                    location.pathname === link.path
                      ? 'bg-secondary text-primary'
                      : 'text-foreground/80 hover:bg-secondary/50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-white rounded-md px-4 py-3 text-base font-medium transition-all hover:bg-primary/90 mt-2"
              >
                Book a Session
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
