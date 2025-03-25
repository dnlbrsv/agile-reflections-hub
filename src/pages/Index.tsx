
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileStack, Users, Clipboard, PenTool, Search, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Free Templates',
      description: 'Access 5 free custom retrospective templates to enhance your team meetings.',
      icon: <FileStack size={24} />,
      link: '/services#free-templates',
    },
    {
      title: 'Custom Templates',
      description: 'Get a personalized template designed specifically for your team\'s unique needs.',
      icon: <PenTool size={24} />,
      link: '/services#custom-template',
    },
    {
      title: 'Template Library',
      description: 'Gain access to our extensive library of 100+ unique retrospective templates.',
      icon: <Clipboard size={24} />,
      link: '/services#template-library',
    },
    {
      title: 'Facilitated Sessions',
      description: 'Have an expert lead your team through an effective and engaging retrospective.',
      icon: <Users size={24} />,
      link: '/services#facilitated-retro',
    },
  ];

  const testimonials = [
    {
      quote: "The custom retrospective templates transformed our team meetings. We're now uncovering insights we never would have found with standard approaches.",
      author: "Sarah Johnson",
      role: "Scrum Master",
      company: "TechInnovate Ltd",
      rating: 5,
    },
    {
      quote: "Having our retrospective facilitated by an expert was eye-opening. Our team communication improved dramatically after just one session.",
      author: "Michael Chen",
      role: "Product Owner",
      company: "Agile Solutions",
      rating: 5,
    },
    {
      quote: "The template library has been a game-changer for keeping our retrospectives fresh and engaging. Our team looks forward to them now!",
      author: "Jessica Parker",
      role: "Development Lead",
      company: "DevStream Inc",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjE5NXwwfDF8c2VhcmNofDJ8fHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTcxMzk2NDU0MXww&ixlib=rb-4.0.3&q=80&w=1080')] bg-no-repeat bg-right-top bg-contain opacity-5 -z-20"></div>
        
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <span>Transform Your Team's Retrospectives</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
            
            <h1 className="heading-1 text-foreground mb-6 animate-slide-in">
              Elevate Your Agile Practice with Expert-Crafted Retrospectives
            </h1>
            
            <p className="subtitle-large mb-8 animate-slide-in [animation-delay:100ms]">
              Custom templates, facilitated sessions, and agile coaching to help your team reflect, learn, and continuously improve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in [animation-delay:200ms]">
              <Link
                to="/services"
                className="bg-primary text-white rounded-lg px-6 py-3 font-medium transition-all hover:shadow-md hover:bg-primary/90 inline-flex items-center justify-center"
              >
                Explore Services
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <Link
                to="/services#free-templates"
                className="bg-white border border-border rounded-lg px-6 py-3 font-medium transition-all hover:bg-secondary inline-flex items-center justify-center"
              >
                Get Free Templates
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border/30 grid grid-cols-2 sm:grid-cols-3 gap-6 animate-fade-in [animation-delay:300ms]">
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Unique Templates</p>
              </div>
              
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Teams Transformed</p>
              </div>
              
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">Services Designed to Elevate Your Agile Practice</h2>
            <p className="subtitle">
              From free templates to personalized coaching, we offer the tools and expertise you need to make your retrospectives more effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View all services <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="container-custom">
          <div className="bg-white border border-border/40 rounded-2xl p-8 md:p-12 shadow-subtle relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjE5NXwwfDF8c2VhcmNofDEwfHxyZXRyb3NwZWN0aXZlfGVufDB8fHx8MTcxMzk2NDY1N3ww&ixlib=rb-4.0.3&q=80&w=1080')] bg-no-repeat bg-center bg-cover opacity-10 -z-10"></div>
            
            <div className="max-w-3xl">
              <h2 className="heading-2 mb-6">Ready to Transform Your Team's Retrospectives?</h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're looking for simple template upgrades or comprehensive agile coaching, we're here to help your team achieve its full potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-white rounded-lg px-6 py-3 font-medium transition-all hover:shadow-md hover:bg-primary/90 inline-flex items-center justify-center"
                >
                  Schedule a Consultation
                </Link>
                
                <Link
                  to="/services#free-templates"
                  className="bg-secondary text-foreground rounded-lg px-6 py-3 font-medium transition-all hover:bg-secondary/80 inline-flex items-center justify-center"
                >
                  Download Free Templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">What Teams Are Saying</h2>
            <p className="subtitle">
              Don't just take our word for it. Here's what teams have achieved with our retrospective solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Start Your Agile Transformation Today</h2>
          
          <p className="subtitle max-w-2xl mx-auto mb-8">
            Take the first step toward more effective retrospectives and continuous team improvement.
          </p>
          
          <Link
            to="/contact"
            className="bg-primary text-white rounded-lg px-8 py-4 font-medium transition-all hover:shadow-md hover:bg-primary/90 inline-flex items-center justify-center"
          >
            Get Started
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
