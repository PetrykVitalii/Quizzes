import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getQuizzes } from '@/store/actions/quizzes';
import { selectQuizzesState } from '@/store/selectors/quizzes';
import { selectQuizState } from '@/store/selectors/quiz';
import { RequestState } from '@/store/reducers/common';
import { AppDispatch } from '@/store';
import { createQuiz } from '@/store/actions/quiz';
import { IPostQuizObject } from '@/interfaces/quiz';
import { useRouter } from 'next/router';
import Button from '../common/Button';
import CheckBox from '../common/CheckBox';
import Input from '../common/Input';
import useLanguage from '../hooks/useLanguage';
import DeleteIcon from '../icons/DeleteIcon';
import { calculateCorrectAnswers } from '../../utils/calculate';
import HomeIcon from '../icons/HomeIcon';

interface Question {
  id: number;
  text: string;
  answers: Answer[];
  type: string;
}

interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

const CreateQuiz: React.FC = () => {
  const [{ commonLn }] = useLanguage();
  const [quizName, setQuizName] = React.useState('');
  const quizState = useSelector(selectQuizState);
  const quizzesState = useSelector(selectQuizzesState);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [questions, setQuestions] = React.useState<Question[]>([
    {
      id: 0,
      text: '',
      answers: [{ id: 0, text: '', isCorrect: false }],
      type: 'single',
    },
  ]);

  const addQuestion = () => {
    const lastId = questions[questions.length - 1]?.id || 0;
    const newQuestion: Question = {
      id: lastId + 1,
      text: '',
      answers: [{ id: 0, text: '', isCorrect: false }],
      type: 'single',
    };
    setQuestions([...questions, newQuestion]);
  };

  const changeAnswerText = (
    questionId: number,
    answerId: number,
    text: string,
  ) => {
    const newQuestions = questions.map((question) => {
      if (question.id === questionId) {
        const newAnswers = question.answers.map((answer) => {
          if (answer.id === answerId) {
            return { ...answer, text };
          }
          return answer;
        });
        return { ...question, answers: newAnswers };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const toggleQuestionType = (questionId: number) => {
    const newQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          type: question.type === 'single' ? 'multiple' : 'single',
        };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const changeQuestionName = (questionId: number, text: string) => {
    const newQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, text };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const toggleCorrect = (questionId: number, answerId: number) => {
    const newQuestions = questions.map((question) => {
      if (question.id === questionId) {
        const newAnswers = question.answers.map((answer) => {
          if (answer.id === answerId) {
            return { ...answer, isCorrect: !answer.isCorrect };
          }
          return answer;
        });
        return { ...question, answers: newAnswers };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const deleteQuestion = (questionId: number) => {
    const newQuestions = questions.filter(
      (question) => question.id !== questionId,
    );
    setQuestions(newQuestions);
  };

  const addAnswer = (id: number) => {
    const newQuestions = questions.map((question) => {
      if (question.id === id) {
        const lastId = question.answers[question.answers.length - 1]?.id || 0;
        const newAnswer: Answer = {
          id: lastId + 1,
          text: '',
          isCorrect: false,
        };
        return { ...question, answers: [...question.answers, newAnswer] };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const deleteAnswer = (questionId: number, answerId: number) => {
    const newQuestions = questions.map((question) => {
      if (question.id === questionId) {
        const newAnswers = question.answers.filter(
          (answer) => answer.id !== answerId,
        );
        return { ...question, answers: newAnswers };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const sendQuiz = async () => {
    const quizObject: IPostQuizObject = {
      title: quizName,
      questions: questions.map((question) => ({
        title: question.text,
        type: question.type,
        answers: question.answers.map((answer) => answer.text),
        correctAnswers: question.answers
          .map((answer, index) => (answer.isCorrect ? index : null)!)
          .filter((item) => item !== null),
      })),
    };
    await dispatch(createQuiz(quizObject));
    await dispatch(getQuizzes());

    router.push('/quizzes');
  };

  return (
    <Wrap>
      <Main>
        <TitleBlock>
          <BackButton onClick={() => router.push('/quizzes')}>
            <HomeIcon />
          </BackButton>
          <Title>{commonLn.create_quiz}</Title>
        </TitleBlock>
        <Form>
          <Label>
            <Text>{commonLn.question_name}</Text>
            <Input
              onChange={(e) => setQuizName(e)}
              value={quizName}
              type="text"
            />
          </Label>
          <QuestionsWrap>
            {questions.map((question, questionId) => (
              <QuestionWrap key={question.id}>
                <QuestionTitle>
                  <Label>
                    <Text>
                      {commonLn.question_number}
                      {questionId + 1}
                    </Text>
                    <Input
                      onChange={(e) => changeQuestionName(question.id, e)}
                      type="text"
                      value={question.text}
                    />
                  </Label>
                  <Label>
                    <Text>
                      multiple
                    </Text>
                    <CheckBox isDisabled={calculateCorrectAnswers(question.answers) > 1} setIsActive={() => { toggleQuestionType(question.id); }} isActive={question.type === 'multiple'} />
                  </Label>
                  <IconWrap onClick={() => deleteQuestion(question.id)}>
                    <DeleteIcon />
                  </IconWrap>
                </QuestionTitle>
                <AnswersWrap>
                  {commonLn.answers}
                  {question.answers.map((answer) => (
                    <AnswerWrap key={answer.id}>
                      <Input
                        onChange={(e) => changeAnswerText(
                          question.id,
                          answer.id,
                          e,
                        )}
                        value={answer.text}
                        type="text"
                      />
                      <CheckBox
                        setIsActive={() => toggleCorrect(question.id, answer.id)}
                        isActive={answer.isCorrect}
                      />
                      <IconWrap
                        onClick={() => deleteAnswer(question.id, answer.id)}
                      >
                        <DeleteIcon />
                      </IconWrap>
                    </AnswerWrap>
                  ))}
                  <AddAnswer onClick={() => addAnswer(question.id)}>
                    +
                  </AddAnswer>
                </AnswersWrap>
              </QuestionWrap>
            ))}
          </QuestionsWrap>
          <BtnBox>
            <Button onClick={addQuestion}>{commonLn.add_question}</Button>
          </BtnBox>
          <BtnBox>
            <Button
              isLoading={
                quizState === RequestState.LOADING
                || quizzesState === RequestState.LOADING
              }
              onClick={sendQuiz}
            >
              {commonLn.create_quiz}
            </Button>
          </BtnBox>
        </Form>
      </Main>
    </Wrap>
  );
};

const BackButton = styled.div`
  cursor: pointer;
`;

const Wrap = styled.section`
  max-width: 640px;
  width: 100%;
  padding: 24px 40px;
  border-radius: 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.Main}`};
`;

const Main = styled.main`
  border: ${({ theme }) => `1px solid ${theme.colors.BorderGrey}`};
  padding: 38px 24px 24px 24px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.Second};
`;

const TitleBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Label = styled.label`
  margin: 15px 0;
`;
const Text = styled.p`
  margin: 8px 0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.2px;
`;

const QuestionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 10px 0;
`;

const IconWrap = styled.div`
  & svg {
    cursor: pointer;
  }
  `;

const QuestionWrap = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.BorderGrey}`};
  padding: 10px;
`;

const QuestionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AnswersWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const AnswerWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const AddAnswer = styled.button`
  padding: 8px 24px;
  cursor: pointer;
`;

const Form = styled.div`
`;

const BtnBox = styled.div`
  display: flex;
  width: 140px;
  margin: 20px 0;
  

  & button {
    flex: 0 0 100%;
    width: 100%;
    transition: all 0.3s ease;
  }

  &:hover {
    & button {
      background: ${({ theme }) => theme.colors.Border};
    }
  }
`;

export async function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default CreateQuiz;
