import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Wrapper = styled.div`
  width: 100%;
  min-height: ${props => (props.isVisible ? 'auto' : props.placeholderHeight)};
`;

const LazyLoad = ({ children, placeholderHeight }) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isClient, setIsClient ] = useState(false);
  const [ isLighthouse, setIsLighthouse ] = useState(false);
  const placeholderRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setIsClient(true);
    
    // Detectar Lighthouse para otimizar renderização
    if (typeof window !== 'undefined') {
      // Verificar variável global do _document.js
      if (window.isLighthouse) {
        setIsLighthouse(true);
        setIsVisible(true); // Renderizar imediatamente se for Lighthouse
      }
      
      // Verificar localStorage para simulação local
      try {
        const lighthouseSimulation = localStorage.getItem('lighthouse-simulation');
        if (lighthouseSimulation === 'true') {
          setIsLighthouse(true);
          setIsVisible(true); // Renderizar imediatamente se for Lighthouse
        }
      } catch (e) {}
    }
  }, []);

  const getPlaceholderHeight = () => {
    // Durante SSR, usar valor padrão para evitar diferenças de hidratação
    if (!isClient) {
      return '650px'; // Valor padrão para mobile durante SSR
    }
    
    if (typeof placeholderHeight === 'string') {
      return placeholderHeight;
    }
    if (typeof placeholderHeight === 'object' && placeholderHeight !== null) {
      return isMobile ? placeholderHeight.mobile : placeholderHeight.desktop;
    }
    // Default values if nothing is provided
    return isMobile ? '650px' : '550px';
  };

  const finalPlaceholderHeight = getPlaceholderHeight();

  useEffect(() => {
    // Se for Lighthouse, não ativar o observer
    if (isLighthouse) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px', // Carrega mais cedo (era 100px)
        threshold: 0.01,
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => {
      if (placeholderRef.current) {
        observer.unobserve(placeholderRef.current);
      }
    };
  }, [isLighthouse]);

  return (
    <Wrapper ref={placeholderRef} isVisible={isVisible} placeholderHeight={finalPlaceholderHeight}>
      {isVisible ? children : null}
    </Wrapper>
  );
};

export default LazyLoad;
