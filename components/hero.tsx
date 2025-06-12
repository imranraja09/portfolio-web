"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, Code, Sparkles } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';


export function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    'Computer Engineering Student',
    'Full-Stack Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a dummy resume file for download
    const resumeContent = `
IMRAN RAJA
Computer Engineering Student
Phone: +91 6006464818
Email: imranraja.dev@gmail.com
Location: Mumbai, Maharashtra, India

EDUCATION
- Diploma in Computer Engineering (Currently Pursuing)
  Government Polytechnic College, Mumbai

SKILLS
- JavaScript, TypeScript, React, Next.js
- Node.js, Python, HTML/CSS, Tailwind CSS
- MongoDB, MySQL, Git, Express.js
- Cyber Security

PROJECTS
- Movie Streaming Website
- Online Music Player
- Jarvis AI Assistant

INTERESTS
- Web Development
- Cyber Security
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Imran_Raja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-5">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-shift opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 dark:from-primary/10 dark:to-secondary/20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl float-animation" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Avatar with Pulse Ring Effect - Increased Size */}
          <div className="mb-8 flex justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 pulse-ring" />
              <div className="absolute inset-0 rounded-full bg-primary/20 pulse-ring" style={{ animationDelay: '0.5s' }} />
              <Avatar className="w-48 h-48 border-4 border-primary/20 hover-lift glow-effect relative z-10">
                <AvatarImage src="/logo.png" alt="Imran Raja" />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">IR</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 slide-in-up">
            Hi, I'm <span className="text-gradient">Imran Raja</span>
            <Sparkles className="inline-block w-8 h-8 ml-2 text-yellow-500 float-animation" />
          </h1>
          
          {/* Typing Animation */}
          <div className="text-xl sm:text-2xl text-muted-foreground mb-6 h-8 slide-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="border-r-2 border-primary pr-1">
              {text}
            </span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto slide-in-up" style={{ animationDelay: '0.4s' }}>
            Passionate about creating innovative solutions through code. Building the future with 
            <span className="text-primary font-semibold"> Web Development</span> and 
            <span className="text-purple-500 font-semibold"> Cybersecurity</span>.
          </p>

          {/* Contact Information */}
          <div className="text-muted-foreground mb-8 slide-in-up" style={{ animationDelay: '0.5s' }}>
           
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 slide-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" onClick={downloadResume} className="group hover-lift neon-border bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact} className="hover-glow glass-effect">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 slide-in-up" style={{ animationDelay: '0.8s' }}>
            <Button variant="ghost" size="icon" asChild className="hover-lift hover-glow">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover-lift hover-glow">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover-lift hover-glow">
              <a href="#projects" className="scroll-smooth">
                <Code className="w-6 h-6" />
                <span className="sr-only">Projects</span>
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}