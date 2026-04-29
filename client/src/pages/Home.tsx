import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Product from '@/components/Product';
import Steps from '@/components/Steps';
import Company from '@/components/Company';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

/**
 * BCM Landing Page - Modern Tech Minimalism Design
 * 
 * Design Philosophy:
 * - Clean, professional layout with gradient accents
 * - Blue (#0066CC) and Cyan (#00D9FF) color scheme
 * - Smooth animations and micro-interactions
 * - Mobile-first responsive design
 * - Multilingual support (EN, PT, DE)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Product />
        <Steps />
        <Company />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
