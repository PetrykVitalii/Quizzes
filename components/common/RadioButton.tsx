import React from 'react';
import styled from 'styled-components';

import CheckBoxOnIcon from '@/components/icons/CheckBoxOnIcon';

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const RadioButton: React.FC<Props> = ({
  isActive,
  setIsActive,
}) => {
  const handleSetIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Container onClick={handleSetIsActive}>
      <RadioButtonWrapper isActive={isActive}>
        <CheckBoxOnIcon />
      </RadioButtonWrapper>
      <RadioButtonWrapper isActive={!isActive}>
        <CheckBoxOffIcon />
      </RadioButtonWrapper>
    </Container>
  );
};

const CheckBoxOffIcon = styled.div`
  border: ${({ theme }) => `2px solid ${theme.colors.Border}`};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const RadioButtonWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
`;

const Container = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default RadioButton;
