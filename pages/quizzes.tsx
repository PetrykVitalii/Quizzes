import styled from 'styled-components';

import Quizzes from '@/components/me/Quizzes';

interface Props {}

const Profile: React.FC<Props> = () => (
  <ProfileStyled>
    <Quizzes />
  </ProfileStyled>
);

const ProfileStyled = styled.div`
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

export default Profile;
