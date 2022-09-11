export const calculateCorrectAnswers = (answers: any) => {
  let count = 0;
  answers.forEach((answer: any) => {
    if (answer.isCorrect) {
      count += 1;
    }
  });
  return count;
};
