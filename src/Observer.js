import { useEffect, useContext, useRef } from 'react';
import Context from './Context.js';

const Observer = () => {
  const { modifiers, element } = useContext(Context);
  const { setOffset } = modifiers;

  const options = {
    // root: document.body,
    // rootMargin: '0px',
    threshold: 0.5,
  };

  const handler = (entries) => {
    const first = entries[0];
    if (first.isIntersecting) {
      setOffset((prev) => prev + 1);
    }
  };

  const _observer = useRef(new IntersectionObserver(handler, options));

  useEffect(() => {
    const currentElement = element;
    const currentObserver = _observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return null;
};

export default Observer;
