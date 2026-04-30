const lighthouseRegex = /lighthouse|chrome-lighthouse|headlesschrome|pagespeed|pagespeedinsights|psi/i;

export const isLighthouse = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const userAgent = navigator.userAgent;
  const hostname = window.location.hostname;

  // Detectar Lighthouse real
  const isRealLighthouse = (
    /Chrome-Lighthouse/.test(userAgent) ||
    /PageSpeed/.test(userAgent) ||
    hostname === 'developers.google.com' ||
    hostname === 'pagespeed.web.dev' ||
    hostname === 'web.dev'
  );

  if (isRealLighthouse) {
    return true;
  }

  // Detectar simulação local (apenas em desenvolvimento)
  const isSimulated = localStorage.getItem('lighthouse-simulation') === 'true';
  const isDevelopment = process.env.NODE_ENV === 'development' || hostname === 'localhost';
  
  return isSimulated && isDevelopment;
};

export const getEnvironmentInfo = () => {
  if (typeof window === 'undefined') {
    return { isLighthouse: false, userAgent: 'SSR', hostname: 'SSR' };
  }

  const userAgent = navigator.userAgent;
  const hostname = window.location.hostname;
  const isSimulated = localStorage.getItem('lighthouse-simulation') === 'true';
  const isDevelopment = process.env.NODE_ENV === 'development' || hostname === 'localhost';

  return {
    isLighthouse: isLighthouse(),
    isRealLighthouse: (
      /Chrome-Lighthouse/.test(userAgent) ||
      /PageSpeed/.test(userAgent) ||
      hostname === 'developers.google.com' ||
      hostname === 'pagespeed.web.dev' ||
      hostname === 'web.dev'
    ),
    isSimulated: isSimulated && isDevelopment,
    userAgent: userAgent,
    hostname: hostname,
    isDevelopment: isDevelopment
  };
}; 