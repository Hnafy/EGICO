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
import { useData } from './context/DataContext';
import { buildWhatsAppLink, quoteMessageFor } from './lib/whatsapp';

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

  useEffect(() => {
    if (!routeId) {
      setCurrentTab((tab) => (tab === 'product-detail' ? 'home' : tab));
    }
  }, [routeId]);

  const requestQuote = (product) => {
    window.open(
      buildWhatsAppLink(settings.whatsapp, quoteMessageFor(product)),
      '_blank',
    );
  };

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
    <div className="min-h-screen bg-[#fff8f8] text-[#1e1b1c] flex flex-col font-tajawal antialiased selection:bg-[#a6192e] selection:text-white">
      <Navbar
        currentTab={isProductRoute ? 'product-detail' : currentTab}
        setCurrentTab={navigateToTab}
        onRequestQuote={() => requestQuote(null)}
      />

      <div className="flex-grow">
        {loading && (
          <main className="pt-20 min-h-[60vh] flex items-center justify-center">
            <p className="text-lg text-[#594040] font-bold">جاري تحميل البيانات...</p>
          </main>
        )}

        {!loading && currentTab === 'home' && (
          <main className="pt-20">
            <HeroSection
              featuredProduct={featuredProduct}
              onRequestQuote={() => requestQuote(featuredProduct)}
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
            onRequestQuote={requestQuote}
          />
        )}

        {!loading && !isProductRoute && currentTab === 'products' && (
          <ProductsCatalog
            products={products}
            categories={categories}
            onSelectProduct={handleSelectProduct}
            onRequestQuote={requestQuote}
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