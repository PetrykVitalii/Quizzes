import { useCallback, useState } from 'react';

import useDebounce from '@/components/hooks/useDebounce';

export default <T>(
  value: T, callback: (search: T) => void, startSearchLength = 1, delay = 500,
): [boolean] => {
  const [previousValue, setPreviousValue] = useState<T | string>('');

  const formatSearchValue = (search: T) => {
    switch (typeof search) {
      case 'string':
        return (search.length >= startSearchLength ? search : '') as T;
      default:
        return search;
    }
  };

  const searchCallback = useCallback(() => {
    if (previousValue !== formatSearchValue(value)) {
      callback(formatSearchValue(value));
    }

    setPreviousValue(formatSearchValue(value));
  }, [previousValue, value]);

  const [isDebounce] = useDebounce(searchCallback, delay);

  return [isDebounce];
};
