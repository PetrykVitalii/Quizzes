import React from 'react';

interface Props {}

const Profile: React.FC<Props> = () => {
  console.log('me');

  return (
    <h1>me</h1>
  );
};

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Profile;
