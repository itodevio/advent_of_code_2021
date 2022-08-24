import input from './getInput'

const main = async () => {
  const data = { horizontal: 0, depth: 0, aim: 0 };

  for (const coord of input) {
    const [direction, strvalue] = coord.split(' ');

    const value = Number(strvalue);

    switch(direction) {
      case 'forward':
        data.horizontal += value;

        if (data.aim !== 0) {
          data.depth += data.aim * value * (data.aim > 0 ? 1 : -1);
        }
        break;
      
      case 'up':
        data.aim -= value;
        break;

      case 'down':
        data.aim += value;
        break;
    }
  }

  console.table(data);
  console.log(`Answer = ${data.horizontal * data.depth}`)
}

main();
