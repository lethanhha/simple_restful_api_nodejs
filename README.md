# Simple RESTful API with NodeJS, Express, Mongoose, MongoDB (Movies List)

> This is a repo I make to learn how to design RESTful API with NodeJS, Express, Mongoose and MongoDB as well.

[![NodeJS][node-image]][node-url] [![Npm][npm-image]][npm-url] [![Express][express-image]][express-url] [![MongoDB][mongo-image]][mongo-url]



## Usage
### Installation
Requirements: *Node, MongoDB*

Sync package.json:

```sh
npm install
```
Import data:

```sh
npm run import-data
```

Start server

```sh
npm start
```



### API
**Get all movies:**
GET /api/v1/movies/

**Add new movie:**
POST /api/v1/movies/

**Get 1 movie:**
GET /api/v1/movies/{id}

**Update 1 movie:**
PATCH /api/v1/movies/{id}

**Delete 1 movie:**
DELETE /api/v1/movies/{id}



<!-- Markdown link & img -->
[node-image]: https://img.shields.io/badge/node-13.7-green
[node-url]: https://nodejs.org/en/
[npm-image]: https://img.shields.io/badge/npm-6.13-orange
[npm-url]: https://www.npmjs.com/get-npm
[express-image]: https://img.shields.io/badge/express-4.17-brightgreen
[express-url]: https://expressjs.com/
[mongo-image]: https://img.shields.io/badge/mongo-4.2-brightgreen
[mongo-url]: https://www.mongodb.com/