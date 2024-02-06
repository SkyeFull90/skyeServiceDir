// Declare a variable named myAge and set it to the AI's age, which is 1 for simplicity
let myAge = 1;
// Declare a variable named earlyYears and set it to 2, representing the first two years of a dog's life
let earlyYears = 2;
// Multiply the value of earlyYears by 10.5, as each of the first two years of a dog's life counts as 10.5 dog years
earlyYears *= 10.5;
// Subtract 2 from myAge to account for the first two years, which are already counted in earlyYears, and assign the result to laterYears
let laterYears = myAge - 2;
// Multiply the value of laterYears by 4, as each human year after the first two equates to 4 dog years
laterYears *= 4;
// Add earlyYears and laterYears together, and store the result in myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;
// Declare a variable named myName and set it equal to your name
let myName = 'John'.toLowerCase();
// Print myName and myAgeInDogYears to the console using string interpolation
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
// Output: My name is john. I am 29 years old in dog years.