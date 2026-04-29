import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pt', label: 'Português (Brasil)' },
    { code: 'de', label: 'Deutsch' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330238800/GLCcC6TGLvAoyPwtkkYPiB/BCMLOGOTIPOVETOR_page-0001_55af4d77.jpg"
            alt="BCM Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium text-sm"
            aria-label={t('header.language')}
          >
            <Globe size={18} />
            <span className="hidden sm:inline">{language.toUpperCase()}</span>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-in fade-in duration-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as 'en' | 'pt' | 'de');
                    setIsOpen(false);
                  }}
                  className={`transition-all duration-300 w-full text-left px-4 py-3 font-medium ${
                    language === lang.code
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
