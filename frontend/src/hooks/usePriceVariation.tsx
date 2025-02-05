import { useEffect, useRef } from 'react';

export function usePriceVariation(currentPrice: number, threshold: number = 0.25) {
    const previousPriceRef = useRef<number>();

    useEffect(() => {
        previousPriceRef.current = currentPrice;
    }, [currentPrice]);

    const previousPrice = previousPriceRef.current;

    const hasBigVariation = previousPrice
        ? Math.abs((currentPrice - previousPrice) / previousPrice) > threshold
        : false;

    return { previousPrice, hasBigVariation };
}
