# Health Tracking App with React, GraphQL, and TypeORM

This app shows how to use React, GraphQL, and TypeORM to build a health tracking app and add authentication with Okta.

## Getting Started

```bash
git clone https://github.com/jlutin/health-tracker.git
cd health-tracker
```

## API

To run the GraphQL API, cd into the `graphql-api` folder and install its dependencies:
 
```bash
npm i
```

This project is configured to use a MySQL database. You can change its settings by modifying [`graphql-api/ormconfig.json`](graphql-api/ormconfig.json). To create a MySQL database with the default settings, run the following commands:

```bash
mysql -u root -p
create database healthpoints;
use healthpoints;
create user health@localhost identified by 'points';
grant all privileges on *.* to health@localhost;
alter user 'health'@localhost IDENTIFIED WITH mysql_native_password BY 'points';
```

After this database exists, start the API with `npm start`.

## Client

To run the client, cd into the `react-client` folder and run:
 
```bash
npm i
npm start
```
