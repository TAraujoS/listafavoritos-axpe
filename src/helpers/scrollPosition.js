import { useState, useEffect, useRef, useCallback } from 'react';

function useScrollPosition() {
  const oldTop = useRef(0);
  const [ curTop, setCurTop ] = useState(0);

  // Otimizado: useCallback para evitar recriação da função
  const handleScroll = useCallback(() => {
    const tempCurTop = window.pageYOffset || document.documentElement.scrollTop;

    setCurTop(tempCurTop);
    oldTop.current = tempCurTop;
  }, []);

  useEffect(() => {
    // Early return if window is not available (SSR)
    if (typeof window === 'undefined') {
      return;
    }

    // Otimizado: usar passive listener para melhor performance
    const options = { passive: true };
    
    if (window.addEventListener) {
      window.addEventListener('scroll', handleScroll, options);
    } else {
      window.attachEvent('onscroll', handleScroll);
    }

    return () => {
      if (window.removeEventListener) {
        window.removeEventListener('scroll', handleScroll, options);
      }
    };
  }, [handleScroll]);

  return [ curTop, oldTop.current ];
}

export default useScrollPosition;
