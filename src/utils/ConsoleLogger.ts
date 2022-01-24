import chalk from 'chalk';

const info = chalk.blue;
const success = chalk.green;
const warn = chalk.yellow;
const error = chalk.red;
const fatal = chalk.bold.redBright;

export class ConsoleLogger {
    info(...data: unknown[]) {
        console.info(info('[INFO]'), ...data);
    }

    success(...data: unknown[]) {
        console.info(success('[SUCCESS]'), ...data);
    }

    warn(...data: unknown[]) {
        console.warn(warn('[WARN]'), ...data);
    }

    error(...data: unknown[]) {
        console.error(error('[ERROR]'), ...data);
    }

    fatal(...data: unknown[]) {
        console.error(fatal('[FATAL]', ...data));
    }
}

export default new ConsoleLogger();
