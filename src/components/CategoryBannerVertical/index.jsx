import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useMediaQuery } from '../../hooks/useMediaQuery';

// styles
import {
  CategoryBannerContainer,
  CategoryItem,
  CategoryItemWrapper,
  CategoryLink,
  TitleList,
  TitleItem,
  SliderVertical,
} from './styles';

// Componente SliderVertical que estava faltando
const SliderVerticalComponent = forwardRef(({
  children,
  onChange,
  type = 'vertical',
  settings = {
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    stopOnHover: false,
  },
}, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <SliderVertical type={type}>
      <Slider
        {...settings}
        afterChange={onChange}
        ref={localRef}
      >
        {children}
      </Slider>
    </SliderVertical>
  );
});

// Componente otimizado para renderizar apenas a imagem necessária
const ResponsiveCategoryImage = ({ mobileSrc, desktopSrc, alt, priority = false }) => {
  const [isClient, setIsClient] = useState(false);
  const [deviceType, setDeviceType] = useState('mobile'); // Default para mobile
  
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 769px)');

  useEffect(() => {
    setIsClient(true);
    
    // Determinar o tipo de dispositivo apenas uma vez
    if (isMobile) {
      setDeviceType('mobile');
    } else if (isDesktop) {
      setDeviceType('desktop');
    }
  }, [isMobile, isDesktop]);

  // Durante SSR, renderizar mobile por padrão
  if (!isClient) {
    return (
      <div className="category-image mobile">
        <Image
          src={mobileSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority={priority}
          unoptimized
        />
      </div>
    );
  }

  // No cliente, renderizar apenas a imagem apropriada
  if (deviceType === 'mobile') {
    return (
      <div className="category-image mobile">
        <Image
          src={mobileSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority={priority}
          unoptimized
        />
      </div>
    );
  }

  if (deviceType === 'desktop') {
    return (
      <div className="category-image desktop">
        <Image
          src={desktopSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority={priority}
          unoptimized
        />
      </div>
    );
  }

  // Fallback para mobile
  return (
    <div className="category-image mobile">
      <Image
        src={mobileSrc}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority={priority}
        unoptimized
      />
    </div>
  );
};

function CategoryBannerVertical({ categoryItems }) {
  const [ currentSlide, setCurrentSlide ] = useState(0);
  const [ isVisible, setIsVisible ] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const handleAfterChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handleTitleClick = (index) => {
    if (sliderRef.current) {
      setCurrentSlide(index);
      sliderRef.current.slickGoTo(index);
    }
  };
  const reorderedTitles = [
    ...categoryItems.slice(currentSlide),
    ...categoryItems.slice(0, currentSlide)
  ];

  return (
    <CategoryBannerContainer ref={containerRef}>
      <h2 className={'with-separator'}>
        Onde você procura um imóvel?
      </h2>
      {isVisible && (

      <SliderVerticalComponent
        ref={sliderRef}
        onChange={handleAfterChange}
        type="full"
      >
        {categoryItems.map((item, itemIndex) => (
          <CategoryItem key={`category-item-${itemIndex}`}>
            {item.link &&
              item.link.url &&
              (item.link.target === 'blank' ||
                item.link.target === 'self') && (
                <CategoryLink
                  href={`/busca?source=${item.link.url}`}
                  target={`_${item.link.target}`}
                >
                  <CategoryItemWrapper>
                    <ResponsiveCategoryImage
                      mobileSrc={item.images.mobile}
                      desktopSrc={item.images.desktop}
                      alt={item.title}
                      priority={itemIndex === 0} // Prioridade máxima para o primeiro item
                    />
                  </CategoryItemWrapper>
                </CategoryLink>
              )}
          </CategoryItem>
        ))}
      </SliderVerticalComponent>
      )}

      <TitleList>
        {reorderedTitles.map((item, idx) => {
          const originalIndex = (currentSlide + idx) % categoryItems.length;
          return (
            <TitleItem
              key={`title-${item}-${idx}`}
              active={idx === 0}
              onClick={() => handleTitleClick(originalIndex)}
            >
              {item.title}
            </TitleItem>
          );
        })}
      </TitleList>
    </CategoryBannerContainer>
  )
}

export default CategoryBannerVertical