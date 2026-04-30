//STRING MANIPULATOR FUNCTIONS
//reversal

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Agina')); //

//character count
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

console.log(countChar('Agina'));

//Capitalizing
function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter('hello'));

//ARRAY FUNCTIONS
//finding maximum and minimum
function findMax(arr) {
  let max = arr[0]; // assume first number is the biggest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // update if we find a bigger number
    }
  }

  return max;
}
const numbers = [11, 21, 16];

console.log(findMax(numbers));

//sum of array
function sumArray(arr) {
  let total = 0; // start from 0

  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i]; // add each number
  }

  return total;
}
console.log(sumArray(numbers));

//filter array
function filterArray(arr) {
  let result = []; // empty array to store good values

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
      // condition
      result.push(arr[i]); // keep it
    }
  }

  return result;
}
console.log(filterArray(numbers, (num) => num > 2));

//MATHEMATICAL FUNCTIONS
//factorial
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
console.log(factorial(5));

//prime number check
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrime(5));
console.log(isPrime(4));

//fibonacci
function fibonacci(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}
console.log(fibonacci(6));
