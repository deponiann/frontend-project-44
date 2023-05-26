import readlineSync from 'readline-sync';
import { NOD, correctCheck } from '../index.js';

export default function gcdGame(username) {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * (20) + 1);
    const randomNum2 = Math.floor(Math.random() * (20) + 1);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = NOD(randomNum1, randomNum2);
    const result = correctCheck(userAnswer, correctAnswer, username);
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}
