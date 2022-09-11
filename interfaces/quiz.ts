export interface IQuiz {
  id: string,
  name: string,
  questions: IQuestion[]
}

export interface IQuestion {
  name: string,
  type: IQuizType,
  answers: string[],
}

export enum IQuizType {
  Multiple = 'multiple',
  Single = 'single',
}
