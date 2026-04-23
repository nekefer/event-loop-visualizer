export const presets = {
  "Synchronous Execution": {
    language: "javascript",
    value: `function greet(name) {
  console.log('Hello, ' + name + '!');
}

function main() {
  console.log('Start');
  greet('World');
  console.log('End');
}

main();`,
  },

  "setTimeout": {
    language: "javascript",
    value: `console.log('Start');

setTimeout(function timeoutCallback() {
  console.log('Inside timeout callback');
}, 1000);

console.log('End');`,
  },

  "setTimeout (0ms delay)": {
    language: "javascript",
    value: `console.log('Start');

setTimeout(function zeroDelayCallback() {
  console.log('Zero-delay callback fires last!');
}, 0);

console.log('End');`,
  },

  "Nested Function Calls": {
    language: "javascript",
    value: `function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  const result = square(n);
  console.log('Square of ' + n + ' is ' + result);
}

printSquare(5);`,
  },

  "fetch with .then()": {
    language: "javascript",
    value: `console.log('Fetching data...');

fetch('https://fake-json-api.mock.beeceptor.com/users')
  .then(function handleResponse(response) {
    console.log('Response received!');
  });

console.log('Fetch initiated — execution continues');`,
  },
};
