const isProduction = process.env.NODE_ENV === 'production';

const isDefault = (fallback) =>
    process.env.TYPEORM_CONNECTION_NAME == fallback ? 'default' : fallback;

const common_options = {
    host: 'localhost',
    database: 'wikipedia_scraper',
    entities: ['build/**/*.entity.js'],
    logging: !isProduction,
    synchronize: !isProduction
};

module.exports = [
    {
        ...common_options,
        name: isDefault('mysql'),
        type: 'mysql',
        port: 3306,
        username: 'root',
        password: 'admin'
    },
    {
        ...common_options,
        name: isDefault('postgres'),
        type: 'postgres',
        port: 5432,
        username: 'admin',
        password: 'admin'
    },
    {
        ...common_options,
        name: isDefault('sqlite'),
        type: 'sqlite',
        database: './data/wikipedia_scraper.sqlite3'
    }
];
