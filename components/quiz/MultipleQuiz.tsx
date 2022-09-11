import React, { useState } from 'react';
import styled from 'styled-components';

import CheckBox from '@/components/common/CheckBox';

import { IQuestion } from '@/interfaces/quiz';

interface Props {
  question: IQuestion;
  setResult: (value: number[]) => void;
}

const MultipleQuiz: React.FC<Props> = ({ question, setResult }) => {
  const [rightResults, setRightResults] = useState<{ [key: number]: boolean } >({});

  const handleSetRightResults = (index: number) => (isActive: boolean) => {
    setRightResults((previousResult) => {
      const newResult = { ...previousResult, [index]: isActive };

      const answers = Object.entries(newResult)
        .filter(([, value]) => !!value)
        .map(([key]) => +key);

      setResult(answers);
      return newResult;
    });
  };

  return (
    <MultipleQuizStyled>
      <Title>{question.name}</Title>
      <Answers>
        {question.answers.map((answer, i) => (
          <Answer key={i}>
            <CheckBox setIsActive={handleSetRightResults(i)} isActive={!!rightResults[i]} />
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
