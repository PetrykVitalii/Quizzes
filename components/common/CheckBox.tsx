import React from 'react';
import styled from 'styled-components';

import CheckBoxOffIcon from '@/components/icons/CheckBoxOffIcon';
import CheckBoxOnIcon from '@/components/icons/CheckBoxOnIcon';

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const CheckBox: React.FC<Props> = ({
  isActive,
  setIsActive,
}) => {
  const handleSetIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Container onClick={handleSetIsActive}>
      <CheckBoxWrapper isActive={isActive}>
        <CheckBoxOnIcon />
      </CheckBoxWrapper>
      <CheckBoxWrapper isActive={!isActive}>
        <CheckBoxOffIcon />
      </CheckBoxWrapper>
    </Container>
  );
};

const CheckBoxWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default CheckBox;
