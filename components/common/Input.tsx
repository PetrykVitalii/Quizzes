import React from 'react';
import styled from 'styled-components';

interface Props {
  type?: 'text' | 'password',
  value: string,
  placeholder?: string,
  onChange: (value: string) => void
  errorMessage?: string;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  type = 'text',
  placeholder = '',
  errorMessage = '',
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputStyled>
      <InputComponent
        type={type}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
      {errorMessage && (
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      )}
    </InputStyled>
  );
};

const ErrorMessage = styled.label`
  color: ${({ theme }) => theme.colors.Error};
  position: absolute;
  top: calc(100% + 12px);
  left: 12px;
`;

const InputComponent = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;

const InputStyled = styled.label`
  padding: 12px 24px;
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
  border-radius: 6px;
  width: 100%;
  position: relative;
  display: block;
`;

export default Input;
