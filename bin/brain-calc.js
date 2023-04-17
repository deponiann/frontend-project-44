#!/usr/bin/env node
/* eslint-disable no-bitwise */
import readlineSync from 'readline-sync';
import { username, cli } from '../src/cli.js';

cli()

function calcGame(username) {
    console.log('What is the result of the expression?.');
    for (let i = 0; i < 3; i += 1) {
      var randomNum1 = Math.floor(Math.random() * (20) + 1);
      var randomNum2 = Math.floor(Math.random() * (20) + 1);
      var operators = ['+', '-', '*'];
      var randomOperator = operators[Math.floor(Math.random() * 3)];
      console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2}`);
      var userAnswer = readlineSync.question('Your answer: ');
      var correctAnswer = eval(randomNum1 + randomOperator + randomNum2)
      if (userAnswer !== String(correctAnswer)) {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${username}`);
      } else {
        console.log("Correct!")
      }
    }
    return console.log(`Congratulations, ${username}`);
  }

calcGame(username)

export default calcGame;
