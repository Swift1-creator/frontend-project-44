import readlineSync from 'readline-sync'

const roundsCount = 3

function getGCD(a, b) {
  if (b === 0) return a
  return getGCD(b, a % b)
}

export default function runGcdGame() {
  console.log('Welcome to the Brain GCD!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  for (let i = 0; i < roundsCount; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1
    const num2 = Math.floor(Math.random() * 100) + 1
    const question = `Question: ${num1} ${num2}`
    const answer = readlineSync.question(`${question}\nYour answer: `)
    const correctAnswer = getGCD(num1, num2).toString()

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
} 
  else {
      console.log('Correct!')
    }
  }
  console.log(`Congratulations, ${name}!`)
}
