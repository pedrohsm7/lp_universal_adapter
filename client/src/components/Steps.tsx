import { useLanguage } from '@/contexts/LanguageContext';

export default function Steps() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t('steps.step1.title'),
      description: t('steps.step1.description'),
    },
    {
      number: 2,
      title: t('steps.step2.title'),
      description: t('steps.step2.description'),
    },
    {
      number: 3,
      title: t('steps.step3.title'),
      description: t('steps.step3.description'),
    },
    {
      number: 4,
      title: t('steps.step4.title'),
      description: t('steps.step4.description'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('steps.title')}
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="fade-in card-hover relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step Card */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 h-full">
                {/* Step Number Circle */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full gradient-blue-cyan text-white font-bold text-xl mb-4">
                  {step.number}
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-0.5 gradient-blue-cyan transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
