import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-blue-cyan opacity-5"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text */}
          <div className="fade-in space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="pt-4">
              <div className="inline-block px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                <span className="text-sm font-medium text-blue-600">
                  🎁 Premium Corporate Gift
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Product Image */}
          <div className="fade-in flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 gradient-blue-cyan rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>

              {/* Product Image */}
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330238800/GLCcC6TGLvAoyPwtkkYPiB/pasted_file_lVSVB7_image_d8dba4df.png"
                alt="Universal Travel Adapter"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
