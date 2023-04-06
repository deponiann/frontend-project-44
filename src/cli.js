import readlineSync from 'readline-sync';

export const username = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?: ');

export function cli() {
  console.log(`Hello, ${username}!`);
}
