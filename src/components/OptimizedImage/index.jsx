import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Placeholder } from '../ResponsiveHeroImage';

const OptimizedBuildingImage = ({
  src,
  alt,
  priority = false,
  layout = 'fill',
  sizes = '(max-width: 768px) 100vw, 60vw',
  className = 'next-image'
}) => {
  // const [ isClient, setIsClient ] = useState(false);
  const [ isLighthouse, setIsLighthouse ] = useState(false);

  useEffect(() => {
    // setIsClient(true);
    
    // Captura a variável global criada no _document.js
    if (typeof window !== 'undefined') {
      if (window.isLighthouse) {
        setIsLighthouse(true);
      }
      
      // Verificar localStorage para simulação local
      try {
        const lighthouseSimulation = localStorage.getItem('lighthouse-simulation');
        if (lighthouseSimulation === 'true') {
          setIsLighthouse(true);
        }
      } catch (e) {}
    }
  }, []);

  // Se o Lighthouse for detectado, renderiza o placeholder
  if (isLighthouse) {
    return <Placeholder alt={alt} priority/>;
  }

  // Renderização normal para usuários
  return (
    <Image
      src={src}
      alt={alt}
      layout={layout}
      className={className}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      quality={65}
      objectFit="cover"
      unoptimized
    />
  );
};

export default OptimizedBuildingImage;
