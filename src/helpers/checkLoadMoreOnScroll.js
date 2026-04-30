import { useState, useEffect } from 'react';

function useCheckLoadMoreOnScroll() {
  const [ isActive, setIsActive ] = useState(false);

  function handleScroll() {
    const elementFooter = document.querySelector('.load-more-button');
    if (elementFooter) {
      const elementFooterTop = elementFooter.offsetTop;
      const tempIsActive =
        ((window.innerHeight * 2) + window.scrollY) >= elementFooterTop;

      setIsActive(tempIsActive);
    }
  }

  useEffect(() => {
    if (window.addEventListener) {
      window.addEventListener('scroll', handleScroll, true);
    } else {
      window.attachEvent('onscroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return isActive;
}

export default useCheckLoadMoreOnScroll;
