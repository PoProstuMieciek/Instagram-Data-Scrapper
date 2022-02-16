# Wikipedia Scraper

## Project Description

This is a simple data scraper that uses [Wikipedia](https://www.wikipedia.org/).

It collects data such as:

-   article content,
-   article images
-   links to other articles.

It recursively parses all referenced articles.

It saves all collected data into the database.

Database configuration is user dependent. You can utilize every connection type from [TypeORM](https://typeorm.io/) library.
You can use a local database (e.g. SQLite3) but also a remote database (PostgreSQL or MySQL).

## Used technologies

-   [TypeScript](https://www.typescriptlang.org/) language
-   [TypeORM](https://typeorm.io/) - object–relational mapper library
-   database (PostgreSQL / SQLite3 / MariaDB)

## Useful commands

### `docker-compose up -d`

Start required containers (databases, control panels, object store).

### `yarn build`

Start build.

### `yarn build:watch`

Start build in watch mode.

### `yarn start:dev`

Start app in development mode using nodemon.

### `yarn typeorm schema:drop && yarn typeorm schema:sync`

Drop database and sync database schema using TypeORM CLI.
