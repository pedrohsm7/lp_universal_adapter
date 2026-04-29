import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Lightbulb, Users } from 'lucide-react';

export default function Company() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions for modern challenges',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Premium standards in every product',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships with clients',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Logo and Company Info */}
          <div className="fade-in">
          <div className="mb-8">
            <div className="mb-6">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330238800/GLCcC6TGLvAoyPwtkkYPiB/BCMLOGOTIPOVETOR_page-0001_55af4d77.jpg"
                alt="BCM Logo"
                className="h-24 w-auto"
              />
            </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('company.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('company.description')}
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100">
                        <Icon className="text-blue-600" size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Company Background */}
          <div className="fade-in relative">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330238800/GLCcC6TGLvAoyPwtkkYPiB/company-section-bg-HVQ8f7XTncw3kxxeFUMQGo.webp"
                alt="BCM Company"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 gradient-blue-cyan rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
