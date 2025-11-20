import readlineSync from 'readline-sync'

const roundsCount = 3

export default function runEvenGame() {
  console.log('Welcome to the Brain Even!')
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  for (let i = 0; i < roundsCount; i++) {
    const number = Math.floor(Math.random() * 100)
    const question = `Question: ${number}`
    const answer = readlineSync.question(`${question}\nYour answer: `)
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no'

    if (
      (answer.toLowerCase() === 'yes' && correctAnswer === 'yes')
      || (answer.toLowerCase() === 'no' && correctAnswer === 'no')
    ) {
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
