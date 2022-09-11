import type { NextPage } from 'next';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

import { signUp } from '@/store/actions/auth';
import { AppDispatch } from '@/store';
import { selectSignUpState } from '@/store/selectors/auth';
import { RequestState } from '@/store/reducers/common';

import { ISignUp } from '@/interfaces/authApi';

import useInput from '@/components/hooks/useInput';
import useLanguage from '@/components/hooks/useLanguage';
import useToggle from '@/components/hooks/useToggle';

import { isValidPassword, isValidUserName } from '@/utils/validation';

interface Props {}

const SignUp: NextPage<Props> = () => {
  const [{ commonLn }] = useLanguage();
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const [userName, setUserName] = useInput();
  const [password, setPassword] = useInput();
  const [confirmPassword, setConfirmPassword] = useInput();

  const [isError, setIsError] = useToggle();

  const signUpState = useSelector(selectSignUpState);

  const handleNextClick = async () => {
    if (isUserNameError || isPasswordError || isConfirmPasswordError) {
      setIsError(true);
      return;
    }

    const signUpBody: ISignUp = {
      login: userName,
      password,
    };

    try {
      await dispatch(signUp(signUpBody));
      router.push('quizzes');
    } catch (error) {
      console.error(error);
    }
  };

  const isUserNameError = useMemo(() => !isValidUserName(userName), [userName]);

  const isPasswordError = useMemo(() => !isValidPassword(password), [password]);

  const isConfirmPasswordError = useMemo(
    () => password !== confirmPassword,
    [password, confirmPassword],
  );

  return (
    <SignUpStyled>
      <Title>{commonLn.sign_up}</Title>
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
        <Input
          onChange={setConfirmPassword}
          value={confirmPassword}
          type="password"
          placeholder={commonLn.confirm_password}
          errorMessage={
            isError && isConfirmPasswordError && !isPasswordError
              ? commonLn.confirm_password_error_msg
              : ''
          }
        />
      </InputsContainer>
      <Button
        isLoading={signUpState === RequestState.LOADING}
        onClick={handleNextClick}
      >
        {commonLn.next}
      </Button>
    </SignUpStyled>
  );
};

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
`;

const Title = styled.h2``;

const SignUpStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

export default SignUp;
