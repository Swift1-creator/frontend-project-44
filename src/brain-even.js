import readlineSync from 'readline-sync';
const maxQuestions = 3;
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (num) => num % 2 === 0;
export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}
!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;
  while (correctAnswersCount < maxQuestions) {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}
`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    if (answer !== correctAnswer) {
      console.log(`'${answer}
' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}
!`);
      return;
    }
    console.log('Correct!');
    correctAnswersCount++;
  }
  console.log(`Congratulations, ${name}!`);
};
