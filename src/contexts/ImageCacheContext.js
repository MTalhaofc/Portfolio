import React, { createContext, useContext, useState, useEffect } from 'react';

const ImageCacheContext = createContext();

export const useImageCache = () => useContext(ImageCacheContext);

export const ImageCacheProvider = ({ children }) => {
  const [imageCache, setImageCache] = useState(new Map());

  const preloadImage = (src) => {
    if (imageCache.has(src)) return Promise.resolve(src);
    
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        setImageCache(prev => new Map(prev).set(src, src));
        resolve(src);
      };
      img.onerror = () => {
        const fallback = `https://via.placeholder.com/400x200/1a1a2e/4a9eff?text=Image`;
        setImageCache(prev => new Map(prev).set(src, fallback));
        resolve(fallback);
      };
      img.src = src;
    });
  };

  const getCachedImage = (src) => imageCache.get(src) || src;

  return (
    <ImageCacheContext.Provider value={{ preloadImage, getCachedImage, imageCache }}>
      {children}
    </ImageCacheContext.Provider>
  );
};
