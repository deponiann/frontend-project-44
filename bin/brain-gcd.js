#!/usr/bin/env node
/* eslint-disable no-bitwise */
import readlineSync from 'readline-sync';
import { username, cli } from '../src/cli.js';
import { NOD } from '../src/GameLogic.js';

function gcdGame(username) {
    console.log("Find the greatest common divisor of given numbers.")
    for (let i = 0; i < 3; i += 1) {
        var randomNum1 = Math.floor(Math.random() * (20) + 1);
        var randomNum2 = Math.floor(Math.random() * (20) + 1);
        console.log(`Question: ${randomNum1} ${randomNum2}`);
        const userAnswer = readlineSync.question('Your answer: ');
        var correctAnswer = NOD(randomNum1, randomNum2);
        if (userAnswer !== String(correctAnswer)) {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${username}`);
        } else {
            console.log("Correct!")
        }
    }
    return console.log(`Congratulations, ${username}`);
}

cli();
gcdGame(username);

export default gcdGame;