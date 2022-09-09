import {
  useEffect,
  useRef, useState,
  RefObject,
} from 'react';

export default (): [RefObject<HTMLDivElement>, boolean] => {
  const [value, setValue] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [ref.current]);

  return [ref, value];
};
