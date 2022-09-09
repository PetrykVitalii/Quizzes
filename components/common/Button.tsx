import React from 'react';
import styled from 'styled-components';

import LoaderDots from '@/components/common/LoaderDots';

interface Props {
  children: React.ReactElement | string;
  onClick: () => void;
  isLoading?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, isLoading }) => (
  <ButtonStyled onClick={onClick} disabled={isLoading}>
    {isLoading ? <LoaderDots /> : children}
  </ButtonStyled>
);

const ButtonStyled = styled.button`
  padding: 12px 24px;
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
