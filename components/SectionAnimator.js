import { useEffect, useRef, useState } from 'react';

const SectionAnimator = ({ children, animationClass = 'fade-in', threshold = 0.1, rootMargin = '0px' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element visibility changes
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after the first time it becomes visible
        }
      },
      {
        root: null, // relative to document viewport
        rootMargin: rootMargin, // margin around root
        threshold: threshold, // percentage of div visible
      }
    );

    const currentRef = ref.current; // Capture ref.current for cleanup
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Clean up observer
      }
    };
  }, [threshold, rootMargin]); // Re-run effect if threshold or rootMargin changes

  return (
    <div ref={ref} className={isVisible ? animationClass : 'opacity-0 transition-opacity duration-1000'}>
      {children}
    </div>
  );
};

export default SectionAnimator;
