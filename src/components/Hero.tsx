import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground">{t('hero.greeting')}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Ahmed Saleh
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="transition-transform hover:scale-105"
          >
            {t('hero.cta')}
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="transition-transform hover:scale-105"
          >
            {t('hero.contact')}
          </Button>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl text-muted-foreground hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl text-muted-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:ahmed@example.com"
            className="text-3xl text-muted-foreground hover:text-primary transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};
