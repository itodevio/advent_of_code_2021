import input from './getInput'

const main = async () => {
  const data = { horizontal: 0, depth: 0 };

  for (const coord of input) {
    const [direction, value] = coord.split(' ');

    switch(direction) {
      case 'forward':
        data.horizontal += Number(value);
        break;
      
      case 'up':
        data.depth -= Number(value);
        break;

      case 'down':
        data.depth += Number(value);
        break;
    }
  }

  console.table(data);
  console.log(`Answer = ${data.horizontal * data.depth}`)
}

main();
