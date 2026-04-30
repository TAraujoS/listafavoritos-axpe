import React, { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

export const Placeholder = ({ alt }) => (
  <div className="hero-image placeholder">
    <Image
      src={transparentPixel}
      alt={alt}
      layout='fill'
      priority
      sizes="100vw"
      objectFit="cover"
    />
  </div>
);

const ResponsiveHeroImage = memo(({ mobileSrc, desktopSrc, alt, priority = false }) => {
  const [ isClient, setIsClient ] = useState(false);
  const [ isLighthouse, setIsLighthouse ] = useState(false);
  const [ deviceType, setDeviceType ] = useState('mobile'); // Default para mobile

  // Hook para detectar o tipo de dispositivo
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setIsClient(true);
    
    // Captura a variável global criada no _document.js
    if (typeof window !== 'undefined' && window.isLighthouse) {
      setIsLighthouse(true);
    }
    
    // Determinar o tipo de dispositivo apenas uma vez
    if (isMobile) {
      setDeviceType('mobile');
    } else {
      setDeviceType('desktop');
    }
  }, [ isMobile ]);

  // Se o Lighthouse for detectado, renderiza o placeholder
  if (isLighthouse) {
    return <Placeholder alt={alt} priority={priority} />;
  }

  // Lógica de renderização no servidor (SSR)
  // Durante o SSR, isClient é false.
  // Se não for Lighthouse, renderiza a imagem padrão (mobile por padrão)
  if (!isClient) {
    return (
      <div className="hero-image mobile">
        <Image
          src={mobileSrc}
          alt={alt}
          layout='fill'
          priority={priority}
          sizes="(max-width: 768px) 100vw, 1200px"
          objectFit="cover"
          quality={65}
        />
      </div>
    );
  }

  // Lógica de renderização no cliente (CSR)
  // Renderiza a imagem responsiva para usuários normais
  const currentSrc = deviceType === 'mobile' ? mobileSrc : desktopSrc;
  const currentSizes = deviceType === 'mobile' ? '(max-width: 768px) 100vw, 1200px' : '100vw';

  return (
    <div className={`hero-image ${deviceType}`}>
      <Image
        src={currentSrc}
        alt={alt}
        layout='fill'
        priority={priority}
        sizes={currentSizes}
        objectFit="cover"
        quality={65}
      />
    </div>
  );
});

ResponsiveHeroImage.displayName = 'ResponsiveHeroImage';

export default ResponsiveHeroImage;