import { useRef } from 'react';

function useUniqueID(): () => number {
  const lastTimestamp = useRef<number>(0);
  const increment = useRef<number>(0);

  const generateID = (): number => {
    const now = Date.now();
    
    if (now !== lastTimestamp.current) {
      lastTimestamp.current = now;
      increment.current = 0;
    } else {
      increment.current++;
    }
    
    const id = now * 10 + increment.current;

    return id;
  };

  return generateID;
}

export default useUniqueID;
