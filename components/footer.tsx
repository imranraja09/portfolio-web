"use client";

import { Button } from '@/components/ui/button';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/imranraja09', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/imran-raja-bab726309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: Linkedin },
 
  { name: 'Email', href: 'mailto:imranraja.dev@gmail.com', icon: Mail },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Imran Raja</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Computer Engineering student passionate about creating innovative solutions 
              through code. Always learning, always building.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Button key={link.name} variant="ghost" size="icon" asChild>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="w-5 h-5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>imranraja.dev@gmail.com</p>
              <p>+91 6006464818</p>
              <p>Darhal Rajouri ,Jammu And Kashmir</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Imran Raja. All rights reserved.
          </p>
          
          <Button variant="ghost" size="sm" onClick={scrollToTop}>
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}