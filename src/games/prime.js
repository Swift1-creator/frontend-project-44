import readlineSync from 'readline-sync'

const roundsCount = 3

function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

export default function runPrimeGame() {
  console.log('Welcome to the Brain Prime!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  for (let i = 0; i < roundsCount; i++) {
    const number = Math.floor(Math.random() * 100) + 2
    const question = `Question: ${number}`
    const answer = readlineSync.question(`${question}\nYour answer: `)
    const correctAnswer = isPrime(number) ? 'yes' : 'no'

    if ((answer.toLowerCase() === 'yes' && correctAnswer === 'yes') ||
        (answer.toLowerCase() === 'no' && correctAnswer === 'no')) {
      console.log('Correct!')
}
  else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
