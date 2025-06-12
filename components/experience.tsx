import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Calendar, ExternalLink, Play, Music, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Movie Streaming Website',
    company: 'Personal Project',
    location: 'Full-Stack Development',
    period: 'March 2024 - Present',
    type: 'Web Application',
    icon: Play,
    description: 'A comprehensive movie streaming platform with user authentication, movie catalog, video player, and recommendation system. Features include user profiles, watchlists, and advanced search functionality.',
    achievements: [
      'Built responsive movie streaming interface with custom video player',
      'Implemented user authentication and profile management system',
      'Created dynamic movie recommendation algorithm',
      'Integrated payment gateway for premium subscriptions',
      'Optimized video streaming for different network speeds'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Video.js', 'Stripe API'],
    link: '#',
    specialClass: 'movie-hover'
  },
  {
    title: 'Online Music Player',
    company: 'Personal Project',
    location: 'Frontend Development',
    period: 'January 2024 - February 2024',
    type: 'Web Application',
    icon: Music,
    description: 'A feature-rich music streaming application with playlist management, audio visualization, and social sharing capabilities. Includes advanced audio controls and equalizer settings.',
    achievements: [
      'Developed interactive music player with custom audio controls',
      'Implemented playlist creation and management features',
      'Added audio visualization with real-time frequency analysis',
      'Created social sharing and music discovery features',
      'Optimized audio streaming and caching mechanisms'
    ],
    technologies: ['React', 'Web Audio API', 'CSS3', 'JavaScript', 'Firebase', 'Chart.js'],
    link: '#',
    specialClass: 'music-wave-bg'
  },
  {
    title: 'Jarvis AI Assistant',
    company: 'Personal Project',
    location: 'AI Development',
    period: 'November 2023 - December 2023',
    type: 'AI Application',
    icon: Bot,
    description: 'An intelligent virtual assistant inspired by Iron Man\'s Jarvis, capable of voice recognition, natural language processing, and task automation. Features include weather updates, news briefings, and smart home integration.',
    achievements: [
      'Implemented voice recognition and speech synthesis',
      'Developed natural language processing capabilities',
      'Integrated multiple APIs for weather, news, and information',
      'Created task automation and reminder systems',
      'Built conversational AI with context awareness'
    ],
    technologies: ['Python', 'TensorFlow', 'Speech Recognition', 'OpenAI API', 'Flask', 'SQLite'],
    link: '#',
    specialClass: 'jarvis-glow'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-blue-50/30 dark:from-purple-950/10 dark:to-blue-950/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 slide-in-up">
            Projects & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-up">
            Innovative projects that showcase my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden project-card glass-effect ${project.specialClass} ${
                  index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500" />
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <IconComponent className="w-5 h-5 text-primary float-animation" />
                        </div>
                        <span className="text-gradient">{project.title}</span>
                      </CardTitle>
                      <p className="text-lg font-medium text-primary mt-1">
                        {project.company}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.period}
                        </div>
                        <span>•</span>
                        <span>{project.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="default"
                        className="glow-effect"
                      >
                        {project.type}
                      </Badge>
                      {project.link !== '#' && (
                        <Button variant="ghost" size="icon" asChild className="hover-glow">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Key Features & Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start gap-2 text-sm text-muted-foreground slide-in-up"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 pulse-ring" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="hover-glow transition-all duration-300"
                          style={{ animationDelay: `${idx * 0.05}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Special effects for specific projects */}
                  {project.title === 'Online Music Player' && (
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-sm text-muted-foreground">Audio Visualization:</span>
                      <div className="music-wave">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 glass-effect neon-border">
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Currently Working On: Advanced AI Projects</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Next Goal: Full-Stack Enterprise Application</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}