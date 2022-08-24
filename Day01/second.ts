import input from './getinput';

let counter = 0;

for (let i=0; i < input.length-3; i++) {
  const window1 = input.slice(i, i+3).reduce((prev, curr) => prev + curr, 0);
  const window2 = input.slice(i+1, i+4).reduce((prev, curr) => prev + curr, 0);

  if (window2 > window1) {
    counter++;
  }
} 

console.log(`Answer = ${counter}`);