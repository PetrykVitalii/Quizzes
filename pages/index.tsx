import type { NextPage } from 'next';
import styled from 'styled-components';

interface Props {}

const Home: NextPage<Props> = () => (
  <Title>Hello World</Title>
);

const Title = styled.h1``;

export default Home;
