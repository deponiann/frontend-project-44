import readlineSync from 'readline-sync';
import { randomArray, correctCheck } from '../index.js';

export default function progressionGame(username) {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const array = randomArray();
    const step = Math.floor(Math.random() * (array.length) + 1);
    const correctAnswer = array[step];
    array[step] = '..';
    const string = array.join(' ')
    console.log(`Question: ${string}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const result = correctCheck(userAnswer, correctAnswer, username);
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}
