import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import MainApi from '@/api/main';

import LoadingContainer from '@/components/common/LoadingContainer';
import MultipleQuiz from '@/components/quiz/MultipleQuiz';
import SingleQuiz from '@/components/quiz/SingleQuiz';
import Button from '@/components/common/Button';

import { selectQuiz, selectQuizState, selectSubmitQuizState } from '@/store/selectors/quiz';
import { RequestState } from '@/store/reducers/common';
import { getQuiz, quizActions, submitQuiz } from '@/store/actions/quiz';
import { AppDispatch } from '@/store';

import { IQuiz, IQuizType } from '@/interfaces/quiz';

import useLanguage from '@/components/hooks/useLanguage';
import useToggle from '@/components/hooks/useToggle';
import Modal from '@/components/common/Modal';

interface Props {
  initialQuiz: IQuiz,
}

const Quiz: React.FC<Props> = ({ initialQuiz }) => {
  const router = useRouter();
  const [{ commonLn }] = useLanguage();

  const dispatch = useDispatch<AppDispatch>();

  const [results, setResults] = useState<{ [key: string]: number[] } >({});
  const [isError, setIsError] = useToggle();
  const [isModal, setIsModal] = useToggle();

  const quiz = useSelector(selectQuiz);
  const quizState = useSelector(selectQuizState);
  const submitQuizState = useSelector(selectSubmitQuizState);

  const quizId = (router.query as { id: string }).id;

  const handleSetResults = (id: string) => (result: number []) => {
    setResults((previousResult) => ({ ...previousResult, [id]: result }));
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    if (!quizId) {
      return;
    }

    if (initialQuiz) {
      dispatch(quizActions.setQuiz(initialQuiz));
      dispatch(quizActions.setQuizState(RequestState.LOADED));
      return;
    }

    dispatch(getQuiz(quizId));
  }, [quizId]);

  const submit = async () => {
    if (quiz?.questions.length !== Object.values(results).filter((item) => !!item.length).length) {
      setIsError(true);
      return;
    }

    const mappedResult = Object.entries(results)
      .map(([key, value]) => ({ questionId: +key, answers: value }));

    await dispatch(submitQuiz(quiz.id, mappedResult));

    setIsModal(true);
  };

  return (
    <QuizStyled>
      <QuizContainer>
        <LoadingContainer isLoading={quizState !== RequestState.LOADED && !initialQuiz}>
          <QuizTitle>{quiz?.title}</QuizTitle>
          <Quizzes>
            {quiz?.questions.map((question) => {
              switch (question.type) {
                case IQuizType.Multiple:
                  return (
                    <MultipleQuiz
                      setResult={handleSetResults(question.id)}
                      key={question.id}
                      question={question}
                      errorMsg={(isError && !results[question.id]?.length) ? commonLn.choose_answer : ''}
                    />
                  );
                case IQuizType.Single:
                  return (
                    <SingleQuiz
                      setResult={handleSetResults(question.id)}
                      key={question.id}
                      question={question}
                      errorMsg={(isError && !results[question.id]?.length) ? commonLn.choose_answer : ''}
                    />
                  );
                default:
                  return <></>;
              }
            })}
          </Quizzes>
          <ButtonWrapper>
            <Button onClick={submit} isLoading={submitQuizState === RequestState.LOADING}>
              {commonLn.submit_my_answer}
            </Button>
          </ButtonWrapper>
        </LoadingContainer>
      </QuizContainer>
      {isModal && <Modal title="Successfully submited!" closeModal={handleCloseModal} />}
    </QuizStyled>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Quizzes = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const QuizTitle = styled.h2`
  margin-bottom: 16px;
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
