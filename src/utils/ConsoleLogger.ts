import { createLogger, format, transports } from 'winston';

import env, { logging_levels } from '../config';
const { SCRAPER_LOGGING_LEVEL } = env;

export const logger = createLogger({
    level: SCRAPER_LOGGING_LEVEL,
    levels: logging_levels,
    format: format.combine(
        format.colorize(),
        format.simple(),
        format.timestamp()
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            filename: 'instagram-scraper.log'
        }),
        new transports.File({
            filename: 'instagram-scraper.error.log',
            level: 'error'
        })
    ]
});

export default logger;
