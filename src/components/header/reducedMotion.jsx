import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
  // On the server, we return `true` as a default value,
  // but this will be updated on the client when rendered.
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

  useEffect(() => {
    if (isRenderingOnServer) {
      return;
    }

    const mediaQueryList = window.matchMedia(QUERY);
    
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };

    // Use `addEventListener` if available, otherwise fallback to `addListener`
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      // Cleanup with appropriate removal method
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []);

  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
