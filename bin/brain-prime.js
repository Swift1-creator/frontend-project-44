#!/usr/bin/env node

const readline = require('readline');

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
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
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let continueGame = true;

  while (continueGame) {
    const number = Math.floor(Math.random() * 100) + 1; // число от 1 до 100
    const answer = isPrime(number) ? 'yes' : 'no';

    const userAnswer = await askQuestion(`Question: ${number}\nYour answer: `);

    if (userAnswer.trim().toLowerCase() === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      continueGame = false;
    }
  }
}

main();
