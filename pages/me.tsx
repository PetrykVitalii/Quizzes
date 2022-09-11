import React from 'react';
import styled from 'styled-components';

interface Props {}

const Profile: React.FC<Props> = () => {
  console.log('me');

  return (
    <ProfileStyled>
      <ProfileContainer />
    </ProfileStyled>
  );
};

const ProfileContainer = styled.div`
  max-width: 800px;
  width: 100%;
  padding: 24px 40px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.Second};
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
  position: relative;
`;

const ProfileStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  flex: 1;
`;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Profile;
