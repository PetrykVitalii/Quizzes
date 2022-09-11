export interface IQuiz {
  id: string,
  title: string,
  questions: IQuestion[]
}
export interface IQuestion {
  id: string,
  text: string,
  type: IQuizType,
  answers: string[],
}

export interface ISubmitQuiz {
  questionId: number,
  answers: number[],
}

export enum IQuizType {
  Multiple = 'multiple',
  Single = 'single',
}

export interface IPostQuizObject {
  title: string,
  questions: {
    title: string,
    type: string,
    answers: string[],
    correctAnswers: number[]
  }[]
}
