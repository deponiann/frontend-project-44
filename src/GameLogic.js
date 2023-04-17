export function NOD (number1, number2) {
    if (number2 > number1) return NOD(number2, number1);
    if (!number2) return number1;
    return NOD(number2, number1 % number2);
}

// export function randomNum() {
//   return Math.floor(Math.random() * (20) + 1);
// }
// export const operators = ['+', '-', '*'];
// export const randomOperator = operators[Math.floor(Math.random() * 3)];