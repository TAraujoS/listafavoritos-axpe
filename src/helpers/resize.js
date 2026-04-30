import { useState, useEffect } from 'react';

function useResize() {
  const [ curWidth, setCurWidth ] = useState(0);

  function handleResize() {
    const tempWidth = window.innerWidth;

    setCurWidth(tempWidth);
  }

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener('resize', handleResize, true);
    } else {
      window.attachEvent('resize', handleResize);
    }

    setTimeout(() => {
      handleResize();
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize, true);
    };
  }, []);

  return curWidth;
}

export default useResize;
