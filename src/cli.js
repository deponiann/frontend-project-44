import readlineSync from 'readline-sync';

function cli() {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
}

export default cli;
