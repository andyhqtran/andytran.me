'use client';
import { useEffect, useMemo, useState } from 'react';

export const usePageScrollPercentage = () => {
  const [scrollHeight, setScrollHeight] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollHeight(document.body.scrollHeight - window.innerHeight);
    setScrollPosition(window.scrollY);

    const onResize = () => {
      setScrollHeight(document.body.scrollHeight - window.innerHeight);
    };

    const onScroll = () => {
      setScrollHeight(document.body.scrollHeight - window.innerHeight);
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollPercentage = useMemo(() => {
    if (scrollHeight === 0) {
      return 0;
    }

    return Math.ceil((scrollPosition / scrollHeight) * 100);
  }, [scrollHeight, scrollPosition]);

  return {
    scrollPercentage,
  };
};
