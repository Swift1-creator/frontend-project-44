import readlineSync from 'readline-sync'

const roundsCount = 3

export default function runCalcGame() {
  console.log('What is the result of the expression?') // добавлено описание
  console.log('Welcome to the Brain Calc!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  for (let i = 0; i < roundsCount; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1
    const num2 = Math.floor(Math.random() * 100) + 1
    const operators = ['+', '-', '*']
    const operator = operators[Math.floor(Math.random() * operators.length)]

    const question = `Question: ${num1} ${operator} ${num2}`
    const answer = readlineSync.question(`${question}\nYour answer: `)
    let correctAnswer
    switch (operator) {
      case '+':
        correctAnswer = (num1 + num2).toString()
        break
      case '-':
        correctAnswer = (num1 - num2).toString()
        break
      case '*':
        correctAnswer = (num1 * num2).toString()
        break
    }

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
