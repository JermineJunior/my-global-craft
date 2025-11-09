import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with data visualization',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      demo: 'https://example.com',
      code: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    {t('projects.viewDemo')}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open(project.code, '_blank')}
                  >
                    <FaGithub className="text-xl" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
