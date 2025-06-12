import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play, Music, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Movie Streaming Website',
    description: 'A comprehensive movie streaming platform with user authentication, movie catalog, custom video player, and recommendation system. Features include user profiles, watchlists, payment integration, and advanced search functionality.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Video.js', 'Stripe API', 'JWT'],
    features: [
      'Custom video player with quality selection',
      'User authentication and profile management',
      'Dynamic movie recommendation algorithm',
      'Payment gateway integration',
      'Advanced search and filtering',
      'Responsive design for all devices'
    ],
    demoLink: '#',
    githubLink: '#',
    status: 'Completed',
    icon: Play,
    specialClass: 'movie-hover',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    title: 'Online Music Player',
    description: 'A feature-rich music streaming application with playlist management, audio visualization, equalizer settings, and social sharing capabilities. Includes real-time audio analysis and custom audio controls.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Web Audio API', 'CSS3', 'JavaScript', 'Firebase', 'Chart.js'],
    features: [
      'Interactive music player with custom controls',
      'Real-time audio visualization',
      'Playlist creation and management',
      'Audio equalizer with presets',
      'Social sharing and discovery',
      'Offline music caching'
    ],
    demoLink: '#',
    githubLink: '#',
    status: 'Completed',
    icon: Music,
    specialClass: 'music-wave-bg',
    gradient: 'from-purple-500 to-blue-500'
  },
  {
    title: 'Jarvis AI Assistant',
    description: 'An intelligent virtual assistant inspired by Iron Man\'s Jarvis, featuring voice recognition, natural language processing, task automation, and smart home integration capabilities.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'TensorFlow', 'Speech Recognition', 'OpenAI API', 'Flask', 'SQLite'],
    features: [
      'Voice recognition and speech synthesis',
      'Natural language processing',
      'Weather updates and news briefings',
      'Task automation and reminders',
      'Smart home device integration',
      'Conversational AI with context awareness'
    ],
    demoLink: '#',
    githubLink: '#',
    status: 'Completed',
    icon: Bot,
    specialClass: 'jarvis-glow',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 dark:from-indigo-950/10 dark:to-purple-950/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 slide-in-up">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-up">
            A showcase of my innovative projects spanning web development, AI, and cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className={`group project-card glass-effect ${project.specialClass} slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={project.status === 'Completed' ? 'glow-effect' : ''}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-2 bg-white/20 backdrop-blur-sm rounded-full`}>
                      <IconComponent className="w-5 h-5 text-white float-animation" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gradient flex items-center gap-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0 pulse-ring" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs hover-glow"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild className="flex-1 hover-lift">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1 hover-lift">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>

                  {/* Special effects for music player */}
                  {project.title === 'Online Music Player' && (
                    <div className="flex items-center justify-center pt-2">
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="inline-block p-6 glass-effect neon-border">
            <CardContent className="p-0">
              <h3 className="text-lg font-semibold mb-2 text-gradient">Want to see more?</h3>
              <p className="text-muted-foreground mb-4">Check out my GitHub for additional projects and contributions</p>
              <Button asChild className="hover-lift glow-effect">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}