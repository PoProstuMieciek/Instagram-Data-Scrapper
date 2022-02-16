import { createConnection } from 'typeorm';
import { parseSubpage } from './parsers';

import Logger from './utils/ConsoleLogger';

import config from './config';
const { SCRAPER_START_URL } = config;

createConnection().then(async () => {
    Logger.info('Connected successfully!');

    parseSubpage(SCRAPER_START_URL);
});
