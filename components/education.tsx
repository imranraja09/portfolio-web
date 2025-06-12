import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Government Polytechnic College',
    location: 'Mumbai, Maharashtra',
    startDate: 'September 1st, 2022',
    endDate: 'Currently Pursuing',
    status: 'ongoing',
    description: 'Comprehensive program covering software development, database management, networking, and computer systems. Gaining hands-on experience with modern programming languages and development tools.',
    highlights: [
      'Object-Oriented Programming',
      'Database Management Systems',
      'Web Development',
      'Software Engineering',
      'Computer Networks',
      'Data Structures & Algorithms'
    ]
  },
  {
    degree: '10th (Secondary)',
    institution: 'Darhal Public School',
    location: 'Darhal Malkan',
    startDate: 'April 2019',
    endDate: 'April 3rd, 2021',
    status: 'completed',
    description: 'Completed secondary education with strong foundation in core subjects including mathematics, science, and languages, which sparked my interest in technology and problem-solving.',
    highlights: [
      'English',
      'Mathematics',
      'Urdu',
      'Science',
      'Social Science'
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 slide-in-up">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto slide-in-up">
            My academic journey and the foundation that shapes my technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden card-hover glass-effect ${
                index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                edu.status === 'ongoing' 
                  ? 'bg-gradient-to-b from-blue-500 to-purple-500' 
                  : 'bg-gradient-to-b from-green-500 to-emerald-500'
              }`} />
              
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary float-animation" />
                      <span className="text-gradient">{edu.degree}</span>
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                  </div>
                  
                  <Badge 
                    variant={edu.status === 'ongoing' ? 'default' : 'secondary'}
                    className={edu.status === 'ongoing' ? 'glow-effect' : ''}
                  >
                    {edu.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="font-medium mb-3">Key Subjects & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="hover-glow transition-all duration-300"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}