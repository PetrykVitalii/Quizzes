import React, { useState } from 'react';
import styled from 'styled-components';

import CheckBox from '@/components/common/CheckBox';

import { IQuestion } from '@/interfaces/quiz';

interface Props {
  question: IQuestion;
  setResult: (value: number[]) => void;
  errorMsg?: string,
}

const MultipleQuiz: React.FC<Props> = ({ question, setResult, errorMsg = '' }) => {
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
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </MultipleQuizStyled>
  );
};

const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.Error};
`;

const AnswerText = styled.div`
`;

const Answer = styled.div`
  display: flex;
  column-gap: 12px;
`;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Title = styled.h3`
  margin-bottom: 4px;
`;

const MultipleQuizStyled = styled.div`
  
`;

export default MultipleQuiz;
