#!/usr/bin/env node
import readlineSync from 'readline-sync'
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')
const rounds = 3
for (let i = 0; i < rounds; i++) {
  const number = Math.floor(Math.random() * 100) + 1
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `)
  const isEven = number % 2 === 0
  const correctAnswer = isEven ? 'yes' : 'no'
  if (answer.toLowerCase() !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(0)
}
  else {
    console.log('Correct!')
  }
}
console.log(`Congratulations, ${name}!`)
