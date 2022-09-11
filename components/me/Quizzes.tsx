import styled from 'styled-components';

import Profile from '@/components/me/Profile';
import { useRouter } from 'next/router';

interface Props {

}

const QUIZZES = [
  { id: 1, name: 'Alefs Company' },
  { id: 2, name: 'Bdk Auditors' },
  { id: 3, name: 'Company for final test' },
  { id: 4, name: 'Company of Juan' },
  { id: 5, name: 'E-Fin Services' },
  { id: 11, name: 'Alefs Company' },
  { id: 21, name: 'Bdk Auditors' },
  { id: 31, name: 'Company for final test' },
  { id: 41, name: 'Company of Juan' },
  { id: 51, name: 'E-Fin Services' },
  { id: 12, name: 'Alefs Company' },
  { id: 22, name: 'Bdk Auditors' },
  { id: 32, name: 'Company for final test' },
  { id: 42, name: 'Company of Juan' },
  { id: 52, name: 'E-Fin Services' },
  { id: 13, name: 'Alefs Company' },
  { id: 23, name: 'Bdk Auditors' },
  { id: 33, name: 'Company for final test' },
  { id: 43, name: 'Company of Juan' },
  { id: 53, name: 'E-Fin Services' },
  { id: 14, name: 'Alefs Company' },
  { id: 24, name: 'Bdk Auditors' },
  { id: 34, name: 'Company for final test' },
  { id: 44, name: 'Company of Juan' },
  { id: 54, name: 'E-Fin Services' },
  { id: 15, name: 'Alefs Company' },
  { id: 25, name: 'Bdk Auditors' },
  { id: 35, name: 'Company for final test' },
  { id: 45, name: 'Company of Juan' },
  { id: 55, name: 'E-Fin Services' },
];

const Quizzes: React.FC<Props> = () => {
  const router = useRouter();

  const handleAddQuiz = () => {
    router.push('/create-quiz');
  };

  return (
    <Wrap>
      <Main>
        <TitleBlock>
          <Title>Quizzes</Title>
          <AddBtn onClick={handleAddQuiz}>Add Quizzes</AddBtn>
        </TitleBlock>
        <Profiles>
          {QUIZZES.map((prof) => (
            <Profile key={prof.id} name={prof.name} />
          ))}
        </Profiles>
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
