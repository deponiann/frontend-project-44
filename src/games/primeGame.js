import readlineSync from 'readline-sync';
import isPrime from '../index.js';

export default function primeGame(username) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * (20) + 1);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = isPrime(randomNum);
    if (correct === true && userAnswer !== 'yes') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${username}`);
    }
    if (correct === false && userAnswer !== 'no') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${username}`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${username}!`);
}
