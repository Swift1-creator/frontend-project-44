import readlineSync from 'readline-sync'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateProgression(start, step, length) {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const roundsCount = 3

export default function runProgressionGame() {
  console.log('Welcome to the Brain Progression!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What number is missing in the progression?')

  for (let i = 0; i < roundsCount; i++) {
    const start = getRandomInt(1, 50)
    const step = getRandomInt(1, 10)
    const length = getRandomInt(5, 10)
    const progression = generateProgression(start, step, length)
    const missingIndex = getRandomInt(0, progression.length - 1)
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
