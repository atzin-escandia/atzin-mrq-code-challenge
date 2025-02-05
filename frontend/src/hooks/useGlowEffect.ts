import { useState, useEffect } from 'react';
import { usePriceVariation } from '@/hooks/usePriceVariation';

export const useGlowClass = (currentPrice: number) => {
  const [glowClass, setGlowClass] = useState<string>('');
  const { previousPrice, hasBigVariation } = usePriceVariation(currentPrice);

  useEffect(() => {
    if (previousPrice !== undefined && previousPrice !== currentPrice) {
      const direction = currentPrice > previousPrice ? 'up' : 'down';
      const newClass = hasBigVariation ? `symbolCard__${direction}` : '';
      setGlowClass(newClass);
    }
  }, [currentPrice, previousPrice, hasBigVariation]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (glowClass) {
      timeout = setTimeout(() => setGlowClass(''), 1000);
    }

    return () => clearTimeout(timeout);
  }, [glowClass]);

  return glowClass;
};
