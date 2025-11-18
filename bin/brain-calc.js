#!/usr/bin/env node
import readlineSync from 'readline-sync';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calculate(a, b, operator) {
  switch (operator) {
  case '+':
    return a + b;
  case '-':
    return a - b;
  case '*':
    return a * b;
  default:
    throw new Error('Unknown operator');
  }
}
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
const rounds = 3;
for (let i = 0; i < rounds; i++) {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = ['+', '-', '*'][getRandomInt(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit(0);
  } else {
    console.log('Correct!');
  }
}
console.log(`Congratulations, ${name}!`);
