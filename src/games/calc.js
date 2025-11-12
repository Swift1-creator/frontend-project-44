import { randomInt } from '../utils.js';

const operators = ['+', '-', '*'];

export const getQuestionAndAnswer = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);
  const operator = operators[randomInt(0, operators.length - 1)];

  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      answer = 0;
  }

  const question = `${num1} ${operator} ${num2}`;
  return { question, correctAnswer: answer };
};
