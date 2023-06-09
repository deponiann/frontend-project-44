/* eslint-disable */

export function NOD(number1, number2) {
  if (number2 > number1) return NOD(number2, number1);
  if (!number2) return number1;
  return NOD(number2, number1 % number2);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function randomArray() {
  const randomNum1 = getRandomInt(5, 10); // длина массива
  const randomNum2 = Math.floor(Math.random() * (20) + 1); // первое число
  const randomNum3 = getRandomInt(2, 8); // шаг
  // const randomNum4 = Math.floor(Math.random() * (randomNum1) + 1); //пустой слот массива

  const array = [];
  array.length = randomNum1;
  const { length } = array;
  array[0] = randomNum2;
  let Num = array[0];
  for (let i = 0; i < length; i += 1) {
    Num += randomNum3;
    array[i + 1] = Num;
  }
  // const correctAnswer = array[randomNum4]
  // array[randomNum4] = ".."
  return array;
}

export default function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export function correctCheck(userAnswer, correctAnswer, username) {
  if (userAnswer !== String(correctAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${username}!`);
    return false;
  }
  return console.log('Correct!');
}
