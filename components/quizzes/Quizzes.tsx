import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Quizze from '@/components/quizzes/Quizze';
import Logout from '@/components/quizzes/Logout';
import LoadingContainer from '@/components/common/LoadingContainer';

import { selectQuizzes, selectQuizzesState } from '@/store/selectors/quizzes';
import { AppDispatch } from '@/store';
import { getQuizzes } from '@/store/actions/quizzes';
import { RequestState } from '@/store/reducers/common';

interface Props {

}

const Quizzes: React.FC<Props> = () => {
  const router = useRouter();
  const quizzes = useSelector(selectQuizzes);
  const quizzesLoadingState = useSelector(selectQuizzesState);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getQuizzes());
  }, []);

  const handleClick = () => {
    router.push('/create-quiz');
  };

  const handleQuizClick = (code: string) => () => {
    router.push(`/quiz/${code}`);
  };

  return (
    <Wrap>
      <Logout />
      <Main>
        <LoadingContainer isLoading={quizzesLoadingState !== RequestState.LOADED}>
          <TitleBlock>
            <Title>Quizzes</Title>
            <AddBtn onClick={handleClick}>Add Quizzes</AddBtn>
          </TitleBlock>
          <Profiles>
            {quizzes.map((q) => (
              <Quizze key={q.id} name={q.title} onClick={handleQuizClick(q.code)} />
            ))}
          </Profiles>
        </LoadingContainer>
      </Main>
    </Wrap>
  );
};

const Wrap = styled.section`
  max-width: 640px;
  width: 100%;
  padding: 24px 40px;
  border-radius: 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
`;

const Main = styled.main`
  border: ${({ theme }) => `1px solid ${theme.colors.BorderGrey}`};
  padding: 38px 24px 24px 24px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.Second};
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Profiles = styled.div``;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.2px;
`;
const AddBtn = styled.button`
  height: 32px;
  font-size: 12px;
  font-weight: 600;
  border: ${({ theme }) => `1px solid ${theme.colors.BorderGrey}`};
  display: flex;
  padding: 0 12px;
  align-items: center;
  line-height: 15px;
  white-space: pre;
  border-radius: 2px;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
`;

export default Quizzes;
