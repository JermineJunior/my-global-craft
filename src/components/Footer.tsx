import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} Ahmed Saleh. {t('footer.rights')}.
        </p>
      </div>
    </footer>
  );
};
