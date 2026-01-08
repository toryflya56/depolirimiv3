import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (options: ObserverOptions = {}): [Dispatch<SetStateAction<HTMLElement | null>>, IntersectionObserverEntry | null] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        if (entry.isIntersecting && triggerOnce) {
          observer.current?.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const { current: currentObserver } = observer;
    if (node) {
      currentObserver.observe(node);
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [node, threshold, rootMargin, triggerOnce]);

  return [setNode, entry];
};
