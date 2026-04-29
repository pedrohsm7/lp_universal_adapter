import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Instagram, MessageCircle } from 'lucide-react';

export default function CTA() {
  const { t } = useLanguage();

  const actions = [
    {
      icon: Globe,
      label: t('cta.website'),
      url: 'https://www.bcmeletricidade.com.br/',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: Instagram,
      label: t('cta.instagram'),
      url: 'https://www.instagram.com/bcmeletricidade/',
      color: 'bg-pink-600 hover:bg-pink-700',
    },
    {
      icon: MessageCircle,
      label: t('cta.whatsapp'),
      url: 'https://wa.me/553732326788',
      color: 'bg-green-600 hover:bg-green-700',
    },
  ];

  return (
    <section className="py-16 md:py-24 gradient-blue-cyan">
      <div className="container">
        <div className="text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Stay Connected
          </h2>

          {/* CTA Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <a
                  key={index}
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fade-in transition-all duration-300 ${action.color} text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl transform hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={24} className="group-hover:scale-110 transition-all duration-300" />
                  <span className="hidden sm:inline">{action.label}</span>
                  <span className="sm:hidden text-sm">{action.label.split(' ')[0]}</span>
                </a>
              );
            })}
          </div>

          {/* Secondary message */}
          <p className="text-white/80 mt-8 text-lg">
            Thank you for visiting our booth at the trade fair!
          </p>
        </div>
      </div>
    </section>
  );
}
