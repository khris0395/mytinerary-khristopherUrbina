import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// funcion para controlar la posicion inicial del scroll

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;