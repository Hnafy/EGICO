import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturesBento from './components/FeaturesBento';
import ProductDetailPage from './components/ProductDetailPage';
import ProductsCatalog from './components/ProductsCatalog';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Preloader from './components/Preloader';
import { useData } from './context/DataContext';

export default function App() {
  const { products, categories, settings, loading } = useData();
  const { id: routeId } = useParams();
  const navigate = useNavigate();

  const isProductRoute = Boolean(routeId);
  const detailProduct =
    isProductRoute &&
    (products.find((p) => p.id === routeId || p.slug === routeId) || null);

  const featuredProduct =
    products.find((p) => p.id === settings.featuredProductId) || products[0] || null;

  const [currentTab, setCurrentTab] = useState('home');
  const [showPreloader, setShowPreloader] = useState(!routeId);
  const [preloaderFading, setPreloaderFading] = useState(false);
  const [preloaderGone, setPreloaderGone] = useState(false);

  // Show the branded preloader on every page open (home route only)
  useEffect(() => {
    if (!routeId) setShowPreloader(true);
  }, [routeId]);

  // Start fading the preloader as soon as data is ready
  useEffect(() => {
    if (!showPreloader || preloaderFading || loading) return;
    const timer = setTimeout(() => setPreloaderFading(true), 350);
    return () => clearTimeout(timer);
  }, [showPreloader, preloaderFading, loading]);

  // Reveal home content only once the preloader has fully cleared, so the
  // hero entrance animations are never hidden behind the fading overlay
  const homeRevealed = preloaderGone || !showPreloader;

  useEffect(() => {
    if (!routeId) {
      setCurrentTab((tab) => (tab === 'product-detail' ? 'home' : tab));
    }
  }, [routeId]);

  const handleSelectProduct = (product) => {
    navigate(`/product/${product.id || product.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTab = (tab) => {
    if (tab === 'product-detail') return;
    navigate('/');
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#172033] flex flex-col font-tajawal antialiased selection:bg-[#B5122B] selection:text-white">
      {showPreloader && !preloaderGone && (
        <Preloader
          startFade={preloaderFading}
          onDone={() => setPreloaderGone(true)}
        />
      )}

      <Navbar
        currentTab={isProductRoute ? 'product-detail' : currentTab}
        setCurrentTab={navigateToTab}
        settings={settings}
      />

      <div className="flex-grow">
        {loading && (
          <main className="pt-20 min-h-[60vh] flex items-center justify-center">
            <p className="text-lg text-[#667085] font-bold">جاري تحميل البيانات...</p>
          </main>
        )}

        {!loading && homeRevealed && currentTab === 'home' && (
          <main className="pt-20">
            <HeroSection
              featuredProduct={featuredProduct}
              settings={settings}
              onBrowseProducts={() => navigateToTab('products')}
            />
            <FeaturesBento />
          </main>
        )}

        {!loading && isProductRoute && detailProduct && (
          <ProductDetailPage
            product={detailProduct}
            products={products}
            settings={settings}
            onBackToProducts={() => {
              navigate('/');
              setCurrentTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {!loading && !isProductRoute && currentTab === 'products' && (
          <ProductsCatalog
            products={products}
            categories={categories}
            settings={settings}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {!loading && !isProductRoute && currentTab === 'about' && (
          <AboutSection
            onBrowseProducts={() => navigateToTab('products')}
            onContactUs={() => navigateToTab('contact')}
          />
        )}

        {!loading && !isProductRoute && currentTab === 'contact' && (
          <ContactSection products={products} settings={settings} />
        )}
      </div>

      <Footer settings={settings} onNavigate={navigateToTab} />
      <FloatingWhatsApp settings={settings} />
    </div>
  );
}