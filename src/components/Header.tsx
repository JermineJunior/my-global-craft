import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection('home')}>
              {t('nav.home')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              {t('nav.about')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>
              {t('nav.projects')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </Button>
          </div>
          
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};
