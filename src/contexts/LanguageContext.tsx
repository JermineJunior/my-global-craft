import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'logo.title': 'Softwere Engineer',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': "Mohammed Ibrahim",
    'hero.title': 'Full Stack Web Developer',
    'hero.description': 'Passionate about creating elegant solutions to complex problems',
    'hero.cta': 'View My Work',
    'hero.contact': 'Get In Touch',
    
    // About
    'about.title': 'About Me',
    'about.education': 'Education',
    'about.degree': 'Bachelor of Science in Software Engineering',
    'about.skills': 'Technical Skills',
    'about.frontend': 'Frontend Development',
    'about.backend': 'Backend Development',
    'about.tools': 'Tools & Technologies',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Feel free to reach out for collaborations or just a friendly hello',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'logo.title': 'مهندس برمجيات',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': "محمد إبراهيم",
    'hero.title': 'مطور ويب متكامل',
    'hero.description': 'شغوف بإنشاء حلول أنيقة للمشكلات المعقدة',
    'hero.cta': 'عرض أعمالي',
    'hero.contact': 'تواصل معي',
    
    // About
    'about.title': 'نبذة عني',
    'about.education': 'التعليم',
    'about.degree': 'بكالوريوس في هندسة البرمجيات',
    'about.skills': 'المهارات التقنية',
    'about.frontend': 'تطوير الواجهات الأمامية',
    'about.backend': 'تطوير الواجهات الخلفية',
    'about.tools': 'الأدوات والتقنيات',
    
    // Projects
    'projects.title': 'المشاريع المميزة',
    'projects.viewDemo': 'عرض تجريبي',
    'projects.viewCode': 'عرض الكود',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.description': 'لا تتردد في التواصل للتعاون أو مجرد تحية ودية',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
