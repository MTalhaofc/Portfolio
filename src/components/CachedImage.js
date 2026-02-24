import { useImageCache } from '../contexts/ImageCacheContext';

const CachedImage = ({ src, alt, className, ...props }) => {
  const { getCachedImage } = useImageCache();
  
  return (
    <img 
      src={getCachedImage(src)} 
      alt={alt}
      className={className}
      loading="eager"
      {...props}
    />
  );
};

export default CachedImage;
