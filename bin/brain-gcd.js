#!/usr/bin/env node

const readlineSync = require('readline-sync');

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
    const num1 = Math.floor(Math.random() * 100) + 1;
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
      return 1; // Возвращаем код ошибки
    }

    if (countCorrectAnswers >= 3) {
      console.log(`Congratulations, ${userName}!`);
      return 0; // Успешное завершение
    }
  }
};

// Запуск игры при выполнении скрипта
if (require.main === module) {
  process.exit(playGame());
}
