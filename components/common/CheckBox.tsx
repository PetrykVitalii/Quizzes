import React from "react";
import styled from "styled-components";

import CheckBoxOffIcon from "@/components/icons/CheckBoxOffIcon";
import CheckBoxOnIcon from "@/components/icons/CheckBoxOnIcon";
import CheckBoxDisabled from "../icons/CheckBoxDisabled";

interface Props {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  isDisabled?: boolean;
}

const CheckBox: React.FC<Props> = ({ isActive, setIsActive, isDisabled }) => {
  const handleSetIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Container onClick={handleSetIsActive}>
      {isDisabled ? (
        <DisabledCheckBoxWrapper>
          <CheckBoxDisabled/>
        </DisabledCheckBoxWrapper>
      ) : (
        <>
          <CheckBoxWrapper isActive={isActive}>
            <CheckBoxOnIcon />
          </CheckBoxWrapper>
          <CheckBoxWrapper isActive={!isActive}>
            <CheckBoxOffIcon />
          </CheckBoxWrapper>
        </>
      )}
    </Container>
  );
};

const CheckBoxWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const DisabledCheckBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  cursor: not-allowed;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default CheckBox;
