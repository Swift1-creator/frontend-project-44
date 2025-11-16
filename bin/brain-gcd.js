#!/usr/bin/env node

import readlineSync from 'readline-sync';

// Функция для нахождения НОД (используем алгоритм Евклида)
const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const playGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let countCorrectAnswers = 0;

  while (true) {
    const num1 = Math.floor(Math.random() * 100) + 1; // числа от 1 до 100
    const num2 = Math.floor(Math.random() * 100) + 1;

    const question = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2).toString();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (countCorrectAnswers >= 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

playGame();
