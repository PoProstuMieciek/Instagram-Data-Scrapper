import { createConnection } from 'typeorm';
import { parseSubpage } from './parsers';

import Logger from './utils/ConsoleLogger';
import './config';

createConnection().then(async () => {
    Logger.info('Connected successfully!');

    parseSubpage('https://en.wikipedia.org/wiki/Comedy_film');
});
