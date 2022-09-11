import React from 'react';
import styled from 'styled-components';

import { IQuestion } from '@/interfaces/quiz';

interface Props {
  question: IQuestion
}

const SingleQuiz: React.FC<Props> = () => {
  console.log('SingleQuiz');

  return (
    <SingleQuizStyled />
  );
};

const SingleQuizStyled = styled.div`
  
`;

export default SingleQuiz;
