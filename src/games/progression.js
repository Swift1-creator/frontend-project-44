import readlineSync from 'readline-sync'

const roundsCount = 3

export default function runProgressionGame() {
  console.log('Welcome to the Brain Progression!')
  console.log('What number is missing in the progression?')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  for (let i = 0; i < roundsCount; i++) {
    const start = Math.floor(Math.random() * 50) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const length = Math.floor(Math.random() * 6) + 5 // 5-10
    const progression = []
    for (let j = 0; j < length; j++) {
      progression.push(start + j * step)
    }
    const missingIndex = Math.floor(Math.random() * progression.length)
    const progressionWithHidden = [...progression]
    progressionWithHidden[missingIndex] = '..'

    const question = `Question: ${progressionWithHidden.join(' ')}`
    const answer = readlineSync.question(`${question}\nYour answer: `)
    const correctAnswer = progression[missingIndex].toString()

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
