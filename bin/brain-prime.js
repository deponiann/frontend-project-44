#!/usr/bin/env node
/* eslint-disable no-bitwise */
import readlineSync from 'readline-sync';
import { username, cli } from '../src/cli.js';
import isPrime from '../src/GameLogic.js';

function primeGame(username) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    for (let i = 0; i < 3; i = i + 1) {
        var randomNum = Math.floor(Math.random() * (20) + 1);
        console.log(`Question: ${randomNum}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correct = isPrime(randomNum)
        if (correct === true & userAnswer !== 'yes') {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${username}`);
          }
          if (correct === false & userAnswer !== 'no') {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${username}`);
          } else {
            console.log("Correct!");
          }
    }
    return console.log(`Congratulations, ${username}`);
}

cli();
primeGame(username);

export default primeGame;