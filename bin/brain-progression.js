#!/usr/bin/env node
/* eslint-disable no-bitwise */
import readlineSync from 'readline-sync';
import { username, cli } from '../src/cli.js';
import { randomArray } from '../src/GameLogic.js';

cli()
function progressionGame(username) {
    console.log("What number is missing in the progression?")
    for (let i = 0; i < 3; i += 1) {
        let array = randomArray()
        const step = Math.floor(Math.random() * (array.length) + 1)
        const correctAnswer = array[step]
        array[step] = ".."
        console.log(`Question: ${array}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== String(correctAnswer)) {
            return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${username}`);
        } else {
            console.log("Correct!")
        }
    }
    return console.log(`Congratulations, ${username}`);
}

progressionGame(username)