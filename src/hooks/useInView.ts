import { useEffect, useRef, useState } from 'react';

const supportsObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;

/** Devuelve `true` la primera vez que el elemento entra en el viewport. */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  // Sin IntersectionObserver el contenido se muestra directamente.
  const [inView, setInView] = useState(!supportsObserver);

  useEffect(() => {
    const node = ref.current;
    if (!node || !supportsObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
