import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663330238800/GLCcC6TGLvAoyPwtkkYPiB/BCMLOGOTIPOVETOR_page-0001_55af4d77.jpg"
                alt="BCM Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.text')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://www.bcmeletricidade.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bcmeletricidade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/553732326788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://wa.me/553732326788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  +55 (37) 3232-6788
                </a>
              </li>
              <li>
                <a
                  href="https://www.bcmeletricidade.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  bcmeletricidade.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>
              © {currentYear} BCM Eletricidade e Automação. All rights reserved.
            </p>
            <p className="mt-4 md:mt-0">
              Crafted with care for the international trade fair in Germany
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
