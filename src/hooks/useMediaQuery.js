import { useState, useEffect, useMemo } from 'react';

export function useMediaQuery(query) {
  // Memoize the query to avoid unnecessary re-renders
  const memoizedQuery = useMemo(() => query, [query]);
  
  // Valor padrão para SSR - assume mobile por padrão para melhor performance
  // Isso garante que o valor inicial seja o mesmo no servidor e no cliente
  const [ matches, setMatches ] = useState(() => {
    // Durante SSR, sempre retorna false para evitar diferenças de hidratação
    if (typeof window === 'undefined') {
      return false;
    }
    return false; // Valor inicial consistente
  });

  useEffect(() => {
    // Early return if window is not available (SSR)
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(memoizedQuery);
    
    // Set initial value
    setMatches(media.matches);
    
    // Create event listener
    const listener = (event) => setMatches(event.matches);
    
    // Add listener (modern browsers)
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [ memoizedQuery ]);

  return matches;
}