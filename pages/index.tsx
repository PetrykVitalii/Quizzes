import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {}

const Home: NextPage<Props> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/quizzes');
  }, []);

  return (
    <></>
  );
};

export default Home;
