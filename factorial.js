//user input taken from user via prompt and converted into int
let number = parseInt(prompt("Enter the amount of factorial "));
//no of times we need to take loop is i
let i = number;
//answer predefined 1 or else in multiply it will result in 0 * any number = 0
let answer = 1;
for (let i = 1; i <= number; i++) {
  answer = answer * i;
  console.log(answer);
}
