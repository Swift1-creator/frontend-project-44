#!/usr/bin/env node

const readlineSync = require('readline-sync');

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }
  return progression;
};

const playGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  let countCorrectAnswers = 0;

  while (true) {
    const start = Math.floor(Math.random() * 50);
    const step = Math.floor(Math.random() * 10) + 1;
    const length = 10;
    const progression = generateProgression(start, step, length);

    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex].toString();

    const questionProgression = progression.slice();
    questionProgression[hiddenIndex] = '..';

    const question = questionProgression.join(' ');

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 1; // Завершение с ошибкой
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
