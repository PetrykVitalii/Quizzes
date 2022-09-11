import styled from 'styled-components';

import Me from '@/components/me/Me';

interface Props {}

const Profile: React.FC<Props> = () => (
  <ProfileStyled>
    <Me />
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
