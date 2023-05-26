/* eslint-disable */
import readlineSync from 'readline-sync';
import { correctCheck } from '../index.js';

export default function calcGame(username) {
  console.log('What is the result of the expression?.');
  for (let i = 0; i < 3; i += 1) {
    const randomNum1 = Math.floor(Math.random() * (20) + 1);
    const randomNum2 = Math.floor(Math.random() * (20) + 1);
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * 3)];
    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = eval(randomNum1 + randomOperator + randomNum2);
    const result = correctCheck(userAnswer, correctAnswer, username);
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${username}`);
}
