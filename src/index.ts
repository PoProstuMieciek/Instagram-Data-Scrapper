import { createConnection } from 'typeorm';
import Logger from './utils/ConsoleLogger';

import './config';

createConnection().then(async () => {
    Logger.info('Connected successfully!');
});
