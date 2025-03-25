
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Check, Clock, Users } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: 'Continuous Improvement',
      description: 'We believe in practicing what we preach—constantly refining our approaches and services.',
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: 'Effective Collaboration',
      description: 'Great teams are built on trust, open communication, and meaningful reflection.',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Practical Solutions',
      description: 'We focus on delivering actionable insights that drive real team improvements.',
      icon: <Check className="h-5 w-5" />,
    },
    {
      title: 'Agile Excellence',
      description: 'Our methods are grounded in agile best practices and years of real-world experience.',
      icon: <Calendar className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* About Header */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">About Agile Reflections</h1>
            <p className="subtitle-large">
              We're dedicated to helping teams transform their retrospectives from routine meetings into powerful engines of continuous improvement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="heading-3 mb-6">Our Story</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Agile Reflections was founded by a team of passionate agile practitioners who recognized a common challenge across organizations: retrospectives that had become stale, ineffective, or were simply viewed as a checkbox exercise.
                </p>
                
                <p>
                  After years of observing teams struggle with the same retrospective formats and seeing the missed opportunities for meaningful improvement, we dedicated ourselves to revolutionizing how teams approach this crucial agile ceremony.
                </p>
                
                <p>
                  What began as a collection of templates for our own teams quickly grew into a comprehensive service as colleagues and other organizations began requesting our expertise. Today, we're proud to have helped dozens of teams across various industries transform their retrospectives into catalysts for continuous improvement.
                </p>
                
                <p>
                  Our approach combines deep agile expertise with practical facilitation techniques and innovative retrospective formats that engage teams and produce actionable insights. We believe that when done right, retrospectives are the most powerful tool for team growth and organizational improvement.
                </p>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Get in touch <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white/70 shadow-subtle backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjE5NXwwfDF8c2VhcmNofDJ8fHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTcxMzk2NDU0MXww&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Agile team collaboration" 
                  className="w-full h-auto"
                />
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Meet Our Founder</h3>
                  <p className="text-muted-foreground">
                    Jane Doe is a Certified Scrum Master and Agile Coach with over 10 years of experience helping teams improve their retrospective practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="subtitle">
              These core principles guide our approach and inform everything we do.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-border/40 rounded-xl p-6 shadow-subtle transition-all duration-300 hover:shadow-medium"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white border border-border/40 rounded-2xl p-8 md:p-12 shadow-subtle">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-2 mb-4">Our Impact</h2>
              <p className="subtitle">
                We're proud of the difference we've made for teams around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-muted-foreground">Teams Transformed</p>
              </div>
              
              <div className="p-6">
                <p className="text-4xl font-bold text-primary mb-2">100+</p>
                <p className="text-muted-foreground">Unique Templates</p>
              </div>
              
              <div className="p-6">
                <p className="text-4xl font-bold text-primary mb-2">200+</p>
                <p className="text-muted-foreground">Facilitated Sessions</p>
              </div>
              
              <div className="p-6">
                <p className="text-4xl font-bold text-primary mb-2">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Work with Us?</h2>
          
          <p className="subtitle max-w-2xl mx-auto mb-8">
            Let's transform your team's retrospectives into powerful tools for continuous improvement.
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

export default About;
