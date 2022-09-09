import React from 'react';

export default (value: Element) => {
  const ref = React.useRef<Element>();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
