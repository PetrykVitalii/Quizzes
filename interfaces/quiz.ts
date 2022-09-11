export interface IQuiz {
  id: string,
  name: string,
  questions: IQuestion[]
}
export interface IQuestion {
  id: string,
  name: string,
  type: IQuizType,
  answers: string[],
}

export interface ISubmitQuiz {
  [key: string]: number[]
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
