import React from 'react';

interface Props {
  children: React.ReactNode
}

const ProtectRoute: React.FC<Props> = ({ children }) => {
  console.log('ProtectRoute');

  return (
    <>{ children }</>
  );
};

export default ProtectRoute;
