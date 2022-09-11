import React from 'react';
import styled from 'styled-components';

import { IQuestion } from '@/interfaces/quiz';

interface Props {
  question: IQuestion
}

const MultipleQuiz: React.FC<Props> = ({ question }) => {
  console.log('MultipleQuiz');

  return (
    <MultipleQuizStyled>
      <Title>{question.name}</Title>
      <Answers>
        {question.answers.map((answer, i) => (
          <Answer key={i}>
            <AnswerText>{answer}</AnswerText>
          </Answer>
        ))}
      </Answers>
    </MultipleQuizStyled>
  );
};

const AnswerText = styled.div`
`;

const Answer = styled.div`
  display: flex;
  align-items: center;
`;

const Answers = styled.div`
`;

const Title = styled.h3`
`;

const MultipleQuizStyled = styled.div`
  
`;

export default MultipleQuiz;
