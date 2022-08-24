import { readFileSync } from 'fs';

const file = readFileSync('./Day01/input.txt', 'utf-8');

export default file.split('\r\n').map(value => Number(value));