import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState<number>(0);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  });

  return size;
};

export default useWindowSize;
