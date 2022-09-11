import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import MainApi from '@/api/main';

import LoadingContainer from '@/components/common/LoadingContainer';
import MultipleQuiz from '@/components/quiz/MultipleQuiz';
import SingleQuiz from '@/components/quiz/SingleQuiz';

import { selectQuiz, selectQuizState } from '@/store/selectors/quiz';
import { RequestState } from '@/store/reducers/common';
import { getQuiz, quizActions } from '@/store/actions/quiz';
import { AppDispatch } from '@/store';

import { IQuiz, IQuizType } from '@/interfaces/quiz';

interface Props {
  initialQuiz: IQuiz,
}

const Quiz: React.FC<Props> = ({ initialQuiz }) => {
  const router = useRouter();
  const [results, setResults] = useState<{ [key: string]: number[] } >({});
  console.log(results, 'results');

  const dispatch = useDispatch<AppDispatch>();

  const quiz = useSelector(selectQuiz);
  const quizState = useSelector(selectQuizState);

  const quizId = (router.query as { id: string }).id;

  const handleSetResults = (index: number) => (result: number []) => {
    setResults((previousResult) => ({ ...previousResult, [index]: result }));
  };

  useEffect(() => {
    if (quizState === RequestState.LOADED) {
      return;
    }

    if (initialQuiz) {
      dispatch(quizActions.setQuiz(initialQuiz));
      dispatch(quizActions.setQuizState(RequestState.LOADED));
      return;
    }

    dispatch(getQuiz(quizId));
  }, []);

  return (
    <QuizStyled>
      <QuizContainer>
        <LoadingContainer isLoading={quizState !== RequestState.LOADED}>
          <QuizTitle>{quiz?.name}</QuizTitle>
          {quiz?.questions.map((question, i) => {
            switch (question.type) {
              case IQuizType.Multiple:
                return <MultipleQuiz setResult={handleSetResults(i)} key={i} question={question} />;
              case IQuizType.Single:
                return <SingleQuiz key={i} question={question} />;
              default:
                return <></>;
            }
          })}
        </LoadingContainer>
      </QuizContainer>
    </QuizStyled>
  );
};

const QuizTitle = styled.h2`
`;

const QuizContainer = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 24px 40px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.Second};
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
  position: relative;
`;

const QuizStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex: 1;
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const quizId = (params as { id: string }).id;

  const mainApi = new MainApi();

  const quiz = await mainApi.getQuiz(quizId);

  return {
    props:
      {
        initialQuiz: quiz,
      },
  };
};

export default Quiz;
