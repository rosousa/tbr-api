### This repository is no longer maintained!

---

# A simple book organizer

A barebones Node.js app using [Express 4](http://expressjs.com/), [TypeScript](https://www.typescriptlang.org/) and [PostgreSQL](https://www.postgresql.org/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:rosousa/tbr-api.git # or clone your own fork
cd tbr-api
npm install
npm start
```

Your app should now be running on [localhost:4000](http://localhost:4000/status/).

## Routes

```sh
GET: /book  # get all books
GET: /book/read  # get only read books

POST: /book  # create new book
BODY: { "title": "example", "author": "example", "genre": "example" }

PATCH: /book  # update book status
BODY: { "title": "example", "status": true }

DELETE: /book  # delete book
BODY: { "title": "example" }
```
