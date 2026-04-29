import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Shield, Globe } from 'lucide-react';

export default function Product() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: 'Universal Compatibility',
      description: 'Works in 150+ countries worldwide',
    },
    {
      icon: Zap,
      title: 'Fast Charging',
      description: 'Dual USB ports for simultaneous charging',
    },
    {
      icon: Shield,
      title: 'Safety Protection',
      description: 'Built-in surge protection for your devices',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('product.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('product.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="fade-in card-hover p-6 bg-white rounded-xl border border-gray-200 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
