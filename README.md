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
-   Docker

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

## Files

- `.env.example` - example .env configuration file. When no `.env` file is found `.env.example` is copied to `.env`.
- `docker-compose.yml` is used by `docker-compose up -d`
- `examples/wikipedia_scraper.sql` - example database created by this program from [https://en.wikipedia.org/wiki/Linux](https://en.wikipedia.org/wiki/Linux)
- `src` - **source code**
	- `entities` - TypeORM entities - describes database tables
		- `Assets.entity.ts` - not used
		- `StatisticsEntry.entity.ts` - word statistics (number of occurrences of each word) 
		- `Subpage.entity.ts` - stores subpages links and information if they are visited
	- `parsers` - parsers functions
		- `html.parser.ts` - Function that gets a HTML string and returns object similar to `window.document` object in browser. Uses: `cheerio` parsing library
		- `links.parser.ts` - Function that gets CheerioAPI instance and returns a list of links from the website.
		- `subpage.parser.ts` - Main function that gets a website url string and creates a database entry with links and word statistics.
		- `words.parser.ts` - contains 2 functions
			- `unicodeEscape` - Function gets a string and returns the same string but with escaped unicode characters (they seem problematic for the database).
			- `parseWords` - Function that gets CheerioAPI instance and returns a dictionary of statistics.
	- `providers/ObjectStorage.provider.ts` - Functions that upload, download and delete files from object storage. Not used.
	- `utils/ConsoleLogger.ts` - creates logs
	- `config.ts` - configuration file

## Authors
- Maciej Opaliński ([PoProstuMieciek](https://github.com/PoProstuMieciek)) - repository and docker setup, tasks distribution, TypeScript code
- Wojciech Widomski ([WojtekWidomski](https://github.com/WojtekWidomski)) - documentation, TypeScript code
- Mikołaj Popik ([M1KUS3Q](https://github.com/M1KUS3Q)) - Python concept, performance optimization
