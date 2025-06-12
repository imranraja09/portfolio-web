"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Users, Award, Clock } from "lucide-react";

export function Statistics() {
  const stats = [
    {
      icon: Code,
      title: "Projects Completed",
      value: "50+",
      description: "Full-stack applications and websites",
      progress: 85,
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Happy Clients",
      value: "30+",
      description: "Satisfied customers worldwide",
      progress: 92,
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "Years Experience",
      value: "5+",
      description: "Professional development experience",
      progress: 75,
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Hours Coded",
      value: "10,000+",
      description: "Dedicated to crafting quality code",
      progress: 95,
      color: "bg-orange-500"
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Database Design", level: 88 },
    { name: "UI/UX Design", level: 75 }
  ];

  return (
    <section id="statistics" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Statistics & Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my experience, achievements, and technical expertise in software development.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{stat.description}</p>
                  <Progress value={stat.progress} className="h-2" />
                  <span className="text-xs text-muted-foreground mt-1 block">{stat.progress}% Complete</span>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Technical Skills</h3>
            <p className="text-muted-foreground">
              My proficiency levels in various technologies and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <Badge variant="secondary">{skill.level}%</Badge>
                </div>
                <Progress value={skill.level} className="h-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Project Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Days Avg. Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}