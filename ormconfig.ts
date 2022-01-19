import { ConnectionOptions } from 'typeorm';

const host = 'localhost';
const database = 'instagram_scraper';
const entities = ['src/**/*.entity.ts'];

const isDefault = (fallback: string) =>
    process.env.TYPEORM_CONNECTION_NAME == fallback ? 'default' : fallback;

const config: ConnectionOptions[] = [
    {
        name: isDefault('mysql'),
        type: 'mysql',
        host,
        port: 3306,
        username: 'root',
        password: 'admin',
        database,
        entities
    },
    {
        name: isDefault('postgres'),
        type: 'postgres',
        host,
        port: 5432,
        username: 'admin',
        password: 'admin',
        database,
        entities
    },
    {
        name: isDefault('sqlite'),
        type: 'sqlite',
        database: './data/instagram_scraper.sqlite3',
        entities
    }
];

export default config;
