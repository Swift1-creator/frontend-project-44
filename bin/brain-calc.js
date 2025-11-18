#!/usr/bin/env node

import readlineSync from 'readline-sync';

const operators = ['+', '-', '*'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
  return operators[getRandomInt(0, operators.length - 1)];
}

function calculate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error('Unknown operator');
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
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator);

  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

  if (Number(answer) !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit(0);
  } else {
    console.log('Correct!');
  }
}

console.log(`Congratulations, ${name}!`);

