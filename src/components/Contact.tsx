import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      label: t('contact.email'),
      value: 'mohammed.ibrahim@example.com',
      link: 'mailto:mohammed.ibrahim@example.com',
    },
    {
      icon: <FaPhone className="text-3xl" />,
      label: t('contact.phone'),
      value: '+123 456 7890',
      link: 'tel:+1234567890',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      label: t('contact.location'),
      value: 'City, Country',
      link: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          {t('contact.title')}
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-16">
          {t('contact.description')}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-primary">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.label}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
