import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Lightbulb, Target } from 'lucide-react';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python',
  'HTML/CSS', 'Tailwind CSS', 'Git', 'MongoDB', 'MySQL', 'Express.js', 'Cyber Security'
];

const interests = [
  'Web Development', 'Cyber Security'
];

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Professional Summary</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Computer Engineering student with a passion for technology and innovation. 
                Currently pursuing my diploma while actively learning and building projects in web development. 
                I enjoy solving complex problems and creating user-friendly applications that make a positive impact. 
                My goal is to become a skilled full-stack developer and contribute to meaningful projects that 
                leverage technology for good.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Goals & Interests</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm fascinated by the intersection of technology and human experience. My interests span across 
                various domains of software development, with a particular focus on creating responsive, 
                accessible web applications and exploring cybersecurity to build secure and robust systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <CardContent className="p-0">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Skills & Technologies</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="justify-center py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}