import readlineSync from 'readline-sync'
export const runGame = (game) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}
!`)
  console.log('What is the result of the expression?')
  const roundsCount = 3
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer }
= game.getQuestionAndAnswer()
    console.log(`Question: ${question}
`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer.trim() === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}
' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}
!`)
      return
    }
  }
  console.log(`Congratulations, ${name}
!`)
}
