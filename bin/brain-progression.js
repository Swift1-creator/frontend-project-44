#!/usr/bin/env node

const readline = require('readline');

function generateProgression() {
  const length = Math.floor(Math.random() * 6) + 5; // от 5 до 10
  const start = Math.floor(Math.random() * 50);
  const step = Math.floor(Math.random() * 10) + 1; // шаг от 1 до 10
  const missingIndex = Math.floor(Math.random() * length);
  const progression = [];

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  const answer = progression[missingIndex];
  progression[missingIndex] = '..';

  return {
    question: progression.join(' '),
    answer: answer.toString(),
  };
}

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => rl.question(query, (ans) => {
    rl.close();
    resolve(ans);
  }));
}

async function main() {
  console.log('Welcome to the Brain Games!');
  const name = await askQuestion('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let continueGame = true;

  while (continueGame) {
    const { question, answer } = generateProgression();
    const userAnswer = await askQuestion(`Question: ${question}\nYour answer: `);

    if (userAnswer.trim() === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      continueGame = false;
    }
  }
}

main();
