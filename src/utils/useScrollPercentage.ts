import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRafState, useWindowScroll } from 'react-use';

const isClient = typeof window === 'object';

export type ScrollPercentageState = {
  hasMounted: boolean;
  scrollHeight: number;
  scrollPosition: number;
  percentage: number;
};

export const useScrollPercentage = (): ScrollPercentageState => {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useRafState<number>(
    isClient ? document.body.scrollHeight - window.innerHeight : 0,
  );

  const [scrollPosition, setScrollPosition] = useRafState<number>(
    isClient ? window.pageYOffset : 0,
  );

  useEffect(() => {
    const scrollHeightHandler = () => {
      setScrollHeight(document.body.scrollHeight - window.innerHeight);
    };

    const scrollPositionHandler = () => {
      scrollHeightHandler();
      setScrollPosition(window.pageYOffset);
    };

    const routerHandler = () => {
      scrollHeightHandler();
      scrollPositionHandler();
    };

    window.addEventListener('resize', scrollHeightHandler, {
      capture: false,
      passive: true,
    });

    window.addEventListener('scroll', scrollPositionHandler, {
      capture: false,
      passive: true,
    });

    router.events.on('routeChangeStart', routerHandler);

    setHasMounted(true);

    () => {
      window.removeEventListener('resize', scrollHeightHandler);
      window.removeEventListener('scroll', scrollPositionHandler);
      router.events.off('routeChangeStart', routerHandler);
    };
  }, []);

  return {
    hasMounted,
    scrollHeight,
    scrollPosition,
    percentage: Math.ceil((scrollPosition / scrollHeight) * 100),
  };
};
