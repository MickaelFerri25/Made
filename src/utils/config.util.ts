import fs from 'fs';

let config: any;

config = JSON.parse(fs.readFileSync('config.json').toString('utf-8'));

export default config;
