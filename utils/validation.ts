export const isValidUserName = (userName: string) => userName.length > 4 && userName.length < 48;

export const isValidPassword = (password: string) => password.length > 4 && password.length < 48;

export const numOfQuestions = (questions: string) => questions.length > 0 && questions.length <= 10;

export const numOfCorrectAnswers = (answers: any) => {
  let count = 0;
  answers.forEach((answer: any) => {
    if (answer.isCorrect) {
      count += 1;
    }
  });
  return count > 0 && count <= 5;
};
