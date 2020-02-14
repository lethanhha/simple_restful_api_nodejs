# Simple RESTful API with NodeJS, Express, Mongoose, MongoDB (Movie List)

> This is a repo I make to learn how to design RESTful API with NodeJS, Express, Mongoose and MongoDB.

[![StandardJS][standardjs-image]][standardjs-url] ![ES6][es6-image] [![NodeJS][node-image]][node-url] [![Npm][npm-image]][npm-url] [![Express][express-image]][express-url] [![MongoDB][mongo-image]][mongo-url]



## Usage
### Installation
Requirements: *Node, NPM, MongoDB*

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
**GET** /api/v1/movies/
(Get all movies)

**POST** /api/v1/movies/
(Add new movie)

**GET** /api/v1/movies/{id}
(Get one movie)

**PATCH** /api/v1/movies/{id}
(Update one movie)

**DELETE** /api/v1/movies/{id}
(Delete one movie)


[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen
[standardjs-url]: https://standardjs.com/
[es6-image]: https://img.shields.io/badge/JS-ES6-brightgreen
[node-image]: https://img.shields.io/badge/node-13.7-green
[node-url]: https://nodejs.org/en/
[npm-image]: https://img.shields.io/badge/npm-6.13-orange
[npm-url]: https://www.npmjs.com/get-npm
[express-image]: https://img.shields.io/badge/express-4.17-green
[express-url]: https://expressjs.com/
[mongo-image]: https://img.shields.io/badge/mongo-4.2-green
[mongo-url]: https://www.mongodb.com/
