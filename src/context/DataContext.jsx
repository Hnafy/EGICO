import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const [productsRes, settingsRes] = await Promise.all([
        fetch('/products.json'),
        fetch('/site-config.json'),
      ]);
      const productsData = await productsRes.json();
      const settingsData = await settingsRes.json();
      setProducts(Array.isArray(productsData) ? productsData : []);
      setCategories(
        [...new Set((Array.isArray(productsData) ? productsData : [])
          .map((p) => p.category)
          .filter(Boolean))].map((name) => ({ id: name, name })),
      );
      setSettings(settingsData && typeof settingsData === 'object' ? settingsData : {});
      setError(null);
    } catch (err) {
      setError(err.message);
      setSettings({});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  return (
    <DataContext.Provider
      value={{
        products,
        categories,
        settings,
        loading,
        error,
        reloadProducts: loadAll,
        reloadCategories: loadAll,
        reloadSettings: loadAll,
        loadAll,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) {
    throw new Error('useData must be used within a DataProvider');
  }
  return ctx;
}

export default DataContext;