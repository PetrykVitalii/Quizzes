import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { AppDispatch } from '@/store';
import { RequestState } from '@/store/reducers/common';
import { getQuizzes } from '@/store/actions/quizzes';
import { selectQuizzesState } from '@/store/selectors/quizzes';

import LoadingContainer from '@/components/common/LoadingContainer';
import { logOut } from '@/store/actions/auth';

interface Props {
  children: React.ReactNode
}

const ProtectRoute: React.FC<Props> = ({ children }) => {
  const quizzesLoadingState = useSelector(selectQuizzesState);

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (quizzesLoadingState !== RequestState.LOADED) {
      dispatch(getQuizzes());
    }
  }, []);

  useEffect(() => {
    if (quizzesLoadingState === RequestState.ERROR) {
      dispatch(logOut());
      router.push('/auth');
    }
  }, [quizzesLoadingState]);

  return (
    <LoadingContainer isLoading={quizzesLoadingState !== RequestState.LOADED}>
      { children }
    </LoadingContainer>
  );
};

export default ProtectRoute;
