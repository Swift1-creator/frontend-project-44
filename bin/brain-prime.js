#!/usr/bin/env node

import readlineSync from 'readline-sync';

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const rounds = 3;
for (let i = 0; i < rounds; i++) {
  const number = Math.floor(Math.random() * 100) + 1;
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  if (answer.toLowerCase() !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit(0);
  } else {
    console.log('Correct!');
  }
}

console.log(`Congratulations, ${name}!`);
