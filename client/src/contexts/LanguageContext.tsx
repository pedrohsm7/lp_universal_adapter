import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'header.language': 'Language',
    'hero.title': 'Congratulations on Your Gift!',
    'hero.subtitle': 'You received a Universal Travel Adapter from BCM Eletricidade e Automação. A small gift to keep you powered anywhere in the world.',
    'product.title': 'Your Universal Travel Adapter',
    'product.description': 'This universal adapter allows you to connect your devices in multiple countries safely and conveniently.',
    'steps.title': 'How to Use',
    'steps.step1.title': 'Choose the Correct Plug Type',
    'steps.step1.description': 'Use the side slider to select the correct plug type for your destination.',
    'steps.step2.title': 'Plug Into Wall Outlet',
    'steps.step2.description': 'Insert the adapter into the wall outlet of your destination country.',
    'steps.step3.title': 'Connect Your Device',
    'steps.step3.description': 'Connect your device using the universal socket or USB port.',
    'steps.step4.title': 'Enjoy Safe Charging',
    'steps.step4.description': 'Enjoy safe and convenient charging anywhere in the world.',
    'company.title': 'About BCM Eletricidade e Automação',
    'company.description': 'BCM Eletricidade e Automação is a Brazilian company specialized in electrical solutions, automation and industrial technologies. We are committed to innovation, reliability and delivering high quality solutions to our clients.',
    'cta.website': 'Visit Our Website',
    'cta.instagram': 'Follow Us on Instagram',
    'cta.whatsapp': 'Contact Us on WhatsApp',
    'footer.text': 'Thank you for visiting our booth.',
    'footer.company': 'BCM Eletricidade e Automação',
  },
  pt: {
    'header.language': 'Idioma',
    'hero.title': 'Parabéns pelo Seu Presente!',
    'hero.subtitle': 'Você recebeu um Adaptador Universal de Viagem da BCM Eletricidade e Automação. Um pequeno presente para manter você conectado em qualquer lugar do mundo.',
    'product.title': 'Seu Adaptador Universal de Viagem',
    'product.description': 'Este adaptador universal permite que você conecte seus dispositivos em múltiplos países de forma segura e conveniente.',
    'steps.title': 'Como Usar',
    'steps.step1.title': 'Escolha o Tipo de Tomada Correto',
    'steps.step1.description': 'Use o controle deslizante lateral para selecionar o tipo de tomada correto para seu destino.',
    'steps.step2.title': 'Plugue na Tomada da Parede',
    'steps.step2.description': 'Insira o adaptador na tomada da parede do país de destino.',
    'steps.step3.title': 'Conecte Seu Dispositivo',
    'steps.step3.description': 'Conecte seu dispositivo usando a tomada universal ou porta USB.',
    'steps.step4.title': 'Aproveite o Carregamento Seguro',
    'steps.step4.description': 'Aproveite o carregamento seguro e conveniente em qualquer lugar do mundo.',
    'company.title': 'Sobre a BCM Eletricidade e Automação',
    'company.description': 'A BCM Eletricidade e Automação é uma empresa brasileira especializada em soluções elétricas, automação e tecnologias industriais. Nos comprometemos com inovação, confiabilidade e entrega de soluções de alta qualidade para nossos clientes.',
    'cta.website': 'Visite Nosso Site',
    'cta.instagram': 'Nos Siga no Instagram',
    'cta.whatsapp': 'Entre em Contato no WhatsApp',
    'footer.text': 'Obrigado por visitar nosso estande.',
    'footer.company': 'BCM Eletricidade e Automação',
  },
  de: {
    'header.language': 'Sprache',
    'hero.title': 'Glückwunsch zu Ihrem Geschenk!',
    'hero.subtitle': 'Sie haben einen universellen Reiseadapter von BCM Eletricidade e Automação erhalten. Ein kleines Geschenk, um Sie überall auf der Welt mit Strom versorgt zu halten.',
    'product.title': 'Ihr universeller Reiseadapter',
    'product.description': 'Dieser universelle Adapter ermöglicht es Ihnen, Ihre Geräte in mehreren Ländern sicher und bequem anzuschließen.',
    'steps.title': 'Wie man es benutzt',
    'steps.step1.title': 'Wählen Sie den richtigen Steckertyp',
    'steps.step1.description': 'Verwenden Sie den Schieberegler an der Seite, um den richtigen Steckertyp für Ihr Zielland auszuwählen.',
    'steps.step2.title': 'In die Wandsteckdose stecken',
    'steps.step2.description': 'Stecken Sie den Adapter in die Wandsteckdose des Ziellandes.',
    'steps.step3.title': 'Verbinden Sie Ihr Gerät',
    'steps.step3.description': 'Verbinden Sie Ihr Gerät über die universelle Steckdose oder den USB-Anschluss.',
    'steps.step4.title': 'Genießen Sie sicheres Laden',
    'steps.step4.description': 'Genießen Sie sicheres und bequemes Laden überall auf der Welt.',
    'company.title': 'Über BCM Eletricidade e Automação',
    'company.description': 'BCM Eletricidade e Automação ist ein brasilianisches Unternehmen, das sich auf elektrische Lösungen, Automatisierung und Industrietechnologien spezialisiert. Wir verpflichten uns zu Innovation, Zuverlässigkeit und der Bereitstellung hochwertiger Lösungen für unsere Kunden.',
    'cta.website': 'Besuchen Sie unsere Website',
    'cta.instagram': 'Folgen Sie uns auf Instagram',
    'cta.whatsapp': 'Kontaktieren Sie uns auf WhatsApp',
    'footer.text': 'Vielen Dank für Ihren Besuch an unserem Stand.',
    'footer.company': 'BCM Eletricidade e Automação',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
