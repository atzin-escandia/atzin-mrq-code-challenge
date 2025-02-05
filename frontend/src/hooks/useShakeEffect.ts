import { useState, useEffect } from 'react';

export const useShakeEffect = (shouldShake: boolean, duration = 800) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (shouldShake) {
      setShake(true);
      const timer = setTimeout(() => setShake(false), duration);
      return () => clearTimeout(timer);
    }
  }, [shouldShake, duration]);

  return shake;
};
