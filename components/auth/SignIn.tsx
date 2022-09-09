import type { NextPage } from 'next';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

import { AppDispatch } from '@/store';
import { signIn } from '@/store/actions/auth';
import { selectSignInState } from '@/store/selectors/auth';
import { RequestState } from '@/store/reducers/common';

import { ISignIn } from '@/interfaces/authApi';

import useInput from '@/components/hooks/useInput';
import useLanguage from '@/components/hooks/useLanguage';
import useToggle from '@/components/hooks/useToggle';

import { isValidUserName, isValidPassword } from '@/utils/validation';

interface Props {}

const SignIn: NextPage<Props> = () => {
  const [{ commonLn }] = useLanguage();
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const [userName, setUserName] = useInput();
  const [password, setPassword] = useInput();

  const [isError, setIsError] = useToggle();

  const signInState = useSelector(selectSignInState);

  const handleNextClick = async () => {
    if (isUserNameError || isPasswordError) {
      setIsError(true);
      return;
    }

    const signInBody: ISignIn = {
      username: userName,
      password,
    };

    await dispatch(signIn(signInBody));
    router.push('me');
  };

  const isUserNameError = useMemo(() => !isValidUserName(userName), [userName]);

  const isPasswordError = useMemo(() => !isValidPassword(password), [password]);

  return (
    <SignInStyled>
      <Title>{commonLn.sign_in}</Title>
      <InputsContainer>
        <Input
          onChange={setUserName}
          value={userName}
          placeholder={commonLn.user_name}
          errorMessage={
            isError && isUserNameError ? commonLn.user_name_error_msg : ''
          }
        />
        <Input
          onChange={setPassword}
          value={password}
          type="password"
          placeholder={commonLn.password}
          errorMessage={
            isError && isPasswordError ? commonLn.password_error_msg : ''
          }
        />
      </InputsContainer>
      <Button
        isLoading={signInState === RequestState.LOADING}
        onClick={handleNextClick}
      >
        {commonLn.next}
      </Button>
    </SignInStyled>
  );
};

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
`;

const Title = styled.h2``;

const SignInStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export default SignIn;
