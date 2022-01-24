# Instagram Scraper

## Project Description

This is a simple data scraper that uses [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api).

It creates a database with archived data from specified user profile.
It collects data such as:

-   posts and their content,
-   removed posts,
-   comments,
-   removed comments,
-   bio changes.

It creates a data snapshot at a specified interval of time.

After creating the snapshot, it compares current snapshot with the last collected one.

It creates some sort of a log, adding any noticed changes to the database.

Database configuration is user dependent. You can utilize every connection type from [TypeORM](https://typeorm.io/) library.
You can use a local database (e.g. SQLite3) but also a remote database (PostgreSQL or MySQL).

After successful data scraping process, program can analyze the data in many different ways. There are multiple modules that you can use:

-   face recognition module,
-   text recognition module,
-   Exif metadata collector module.

You can enable more than one analysis module in your configuration.

## Used technologies

-   [TypeScript](https://www.typescriptlang.org/) language
-   [OpenCV](https://opencv.org/) - computer vision library
-   [TypeORM](https://typeorm.io/) - object–relational mapper library
-   database (PostgreSQL / SQLite3 / MariaDB)
-   [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
