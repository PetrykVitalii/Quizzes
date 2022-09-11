import styled from 'styled-components';

import Quizzes from '@/components/quizzes/Quizzes';

interface Props {}

const QuizzesPage: React.FC<Props> = () => (
  <QuizzesPageStyled>
    <Quizzes />
  </QuizzesPageStyled>
);

const QuizzesPageStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default QuizzesPage;
