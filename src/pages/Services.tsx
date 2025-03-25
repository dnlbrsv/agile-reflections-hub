
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Users, Clipboard, PenTool, ArrowRight, Search, BarChart, PresentationChart } from 'lucide-react';

const Services = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash links for smooth scrolling
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const services = [
    {
      id: 'free-templates',
      title: 'Free Custom Templates',
      description: 'Access 5 expertly-designed retrospective templates to enhance your team meetings. These templates are perfect for teams looking to freshen up their retrospective approach without investing in custom solutions.',
      icon: <FileText size={32} className="text-primary" />,
      features: [
        '5 unique retrospective templates in digital format',
        'Detailed instructions for facilitators',
        'Adaptable for teams of any size',
        'Various retrospective formats included',
        'No sign-up required'
      ],
      cta: 'Download Free Templates',
      ctaLink: '/contact',
      secondaryCta: 'See Examples',
      secondaryCtaLink: '#',
    },
    {
      id: 'custom-template',
      title: 'Custom Template on Theme',
      description: 'Get a personalized template designed specifically for your team\'s unique needs and challenges. Share your theme or focus area, and receive a custom-built retrospective template that addresses your specific goals.',
      icon: <PenTool size={32} className="text-primary" />,
      features: [
        'One-on-one consultation to understand your needs',
        'Custom template designed for your specific theme',
        'Digital and printable formats provided',
        'Facilitator guide with detailed instructions',
        'One round of revisions included'
      ],
      cta: 'Request Custom Template',
      ctaLink: '/contact',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '#',
      featured: true,
    },
    {
      id: 'template-library',
      title: '100 Unique Template Library',
      description: 'Gain access to our extensive library of 100+ unique retrospective templates. Never run the same retrospective twice and keep your team engaged with fresh approaches to continuous improvement.',
      icon: <Clipboard size={32} className="text-primary" />,
      features: [
        'Access to 100+ retrospective templates',
        'New templates added monthly',
        'Searchable by theme, duration, and team size',
        'Facilitator guides for each template',
        'Digital and printable formats'
      ],
      cta: 'Access Library',
      ctaLink: '/contact',
      secondaryCta: 'View Sample',
      secondaryCtaLink: '#',
    },
    {
      id: 'facilitated-retro',
      title: 'Facilitated Retrospective',
      description: 'Have an expert lead your team through an effective and engaging retrospective. Our facilitators create a safe space for open discussion and ensure actionable outcomes that drive meaningful improvements.',
      icon: <Users size={32} className="text-primary" />,
      features: [
        'Pre-session consultation to understand team dynamics',
        'Custom retrospective design for your team',
        'Professional facilitation (in-person or virtual)',
        'Action item tracking and follow-up',
        'Post-session summary report'
      ],
      cta: 'Book a Session',
      ctaLink: '/contact',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '#',
    },
    {
      id: 'retrospective-observation',
      title: 'Retrospective Observation & Feedback',
      description: 'Get expert feedback on your team\'s retrospective process. An agile coach will observe your session and provide detailed recommendations to improve effectiveness and outcomes.',
      icon: <Search size={32} className="text-primary" />,
      features: [
        'Discreet observation of your team\'s retrospective',
        'Detailed feedback on facilitation techniques',
        'Recommendations for improved team engagement',
        'Suggestions for effective action item tracking',
        'Follow-up coaching session'
      ],
      cta: 'Request Observation',
      ctaLink: '/contact',
      secondaryCta: 'How It Works',
      secondaryCtaLink: '#',
    },
    {
      id: 'agile-consultation',
      title: 'Agile Consultation & Presentations',
      description: 'Beyond retrospectives, we offer comprehensive agile consulting services to help your organization embrace agile principles more effectively. From workshops to executive briefings, we provide the expertise to support your agile transformation.',
      icon: <PresentationChart size={32} className="text-primary" />,
      features: [
        'Customized agile training workshops',
        'Team coaching and mentoring',
        'Agile implementation strategies',
        'Executive briefings and presentations',
        'Organizational transformation planning'
      ],
      cta: 'Request Consultation',
      ctaLink: '/contact',
      secondaryCta: 'Learn More',
      secondaryCtaLink: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Services Header */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Services & Offerings</h1>
            <p className="subtitle-large">
              From free templates to facilitated sessions, we offer a range of solutions to elevate your team's retrospectives and agile practices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                id={service.id}
                className={`scroll-mt-32 p-8 border rounded-2xl transition-all ${
                  service.featured 
                    ? 'border-primary/30 bg-primary/5 shadow-md' 
                    : 'border-border bg-white/80'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        {service.icon}
                      </div>
                      <h2 className="heading-3">{service.title}</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                      <Link
                        to={service.ctaLink}
                        className={`font-medium transition-all inline-flex items-center justify-center px-6 py-3 rounded-lg ${
                          service.featured
                            ? 'bg-primary text-white hover:bg-primary/90'
                            : 'bg-primary/90 text-white hover:bg-primary/80'
                        }`}
                      >
                        {service.cta}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                      
                      <Link
                        to={service.secondaryCtaLink}
                        className="font-medium transition-all inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-foreground hover:bg-secondary/80"
                      >
                        {service.secondaryCta}
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mr-3 mt-0.5">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Not Sure Which Service Is Right for You?</h2>
            <p className="subtitle mb-8">
              Contact us for a free consultation to discuss your team's needs and discover the best solution for your retrospective challenges.
            </p>
            
            <Link
              to="/contact"
              className="bg-primary text-white rounded-lg px-8 py-4 font-medium transition-all hover:shadow-md hover:bg-primary/90 inline-flex items-center justify-center"
            >
              Schedule a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
