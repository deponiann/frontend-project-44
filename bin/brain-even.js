/* eslint-disable no-bitwise */
import readlineSync from 'readline-sync';

function Game(username) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * (20) + 1);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (randomNum % 2 === 0 & userAnswer !== 'yes') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${username}`);
    }
    if (randomNum % 2 !== 0 & userAnswer !== 'no') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${username}`);
    }
  }
  return console.log(`Congratulations, ${username}`);
}

export default Game;
