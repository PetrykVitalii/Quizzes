import CreateQuiz from '@/components/quizzes/CreateQuiz';
import styled from 'styled-components';

const createPage: React.FC = () => (
  <FormStyled>
    <CreateQuiz />
  </FormStyled>
);

const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export default createPage;
