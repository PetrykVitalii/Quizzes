import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import styled from 'styled-components';

import SignIn from '@/components/auth/SignIn';
import SignUp from '@/components/auth/SignUp';

import Button from '@/components/common/Button';

import useLanguage from '@/components/hooks/useLanguage';

export enum IAuthSteps {
  SignInStep = 'sign_in_step',
  SignUpStep = 'sign_up_step',
}

interface Props {}

const Auth: NextPage<Props> = () => {
  const [activeTab, setActiveTab] = useState(IAuthSteps.SignInStep);
  const [{ commonLn }] = useLanguage();

  const handleActiveTab = () => {
    switch (activeTab) {
      case IAuthSteps.SignInStep:
        setActiveTab(IAuthSteps.SignUpStep);
        break;
      case IAuthSteps.SignUpStep:
        setActiveTab(IAuthSteps.SignInStep);
        break;
      default:
        break;
    }
  };

  const buttonText = useMemo(() => {
    switch (activeTab) {
      case IAuthSteps.SignInStep:
        return commonLn.sign_up;
      case IAuthSteps.SignUpStep:
        return commonLn.sign_in;
      default:
        return '';
    }
  }, [activeTab]);

  const showCurrentStep = () => {
    switch (activeTab) {
      case IAuthSteps.SignInStep:
        return <SignIn />;
      case IAuthSteps.SignUpStep:
        return <SignUp />;
      default:
        return <></>;
    }
  };

  return (
    <AuthStyled>
      <AuthContainer>
        <ButtonWrap>
          <Button onClick={handleActiveTab}>{buttonText}</Button>
        </ButtonWrap>
        {showCurrentStep()}
      </AuthContainer>
    </AuthStyled>
  );
};

const ButtonWrap = styled.div`
  top: 12px;
  right: 12px;
  position: absolute;
`;

const AuthContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 60px 100px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.Second};
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
  position: relative;
`;

const AuthStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex: 1;
`;

export default Auth;
