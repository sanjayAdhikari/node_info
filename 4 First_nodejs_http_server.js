// Node.js First http server:
// =========================

// * Fire up a http server and start serving applications

// http modules:
// ==========

//      * When you starting building HTTP-based applications, the in-built http/https module with help in this regard.


//      Example:
//      =======
const http = require('http'),
    port = 3000;

const requestHandler = (req, res) => {
    console.log('Hello Node.js server');
    response.end('Hello Node.js server!');
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log(`Something went wrong`, err);
    }
    return console.log(`Server is running on port ${port}`);
});


/* Top frameworks to use for building complex web apps

    * Express
    * Hapi
    * Koa
    * Restify

    Express:
    =======

        Is unopinionated, minimalistic web framework for Node.js

    Adding Express to Project:
    =========================
    
        npm install express --save


*/


/* Create an Express HTTP server */
const express = require('express'),
    app = express(),
    port = 3000;


app.get('/', (req, res, next) => {
    console.log('Hello from Express');
});


app.listen(port, (err, res) => {
    if (err) {
        return console.log('Something happend', err);
    }
    console.log(`Server is running on port ${port}`);
});


/**
 * Express by-default gives us a router
 * Define app level routing, using app.get,app.post and app.put
 * Translate to their respective HTTP verbs.
 * 
 *  Middleware:
 * ============
 * 
 *     * unix pipelines for HTTP requests.
 *     
 * Example:
 * ======

 */
const express = require('express'),
    port = 3000,
    app = express();

app.use((req, res, next) => {
    console.log(req.headers());
    next();
});

app.use((req, res, next) => {
    req.chance = Math.random();
    next();
});


app.get('/', (req, res, next) => {
    res.json({
        change: req.chance
    });
});

app.listen(3000);

/**
 * Error Handling is done using 4th parameter called 'err'
 */
const express = require('express')
const app = express()

app.get('/', (request, response) => {
    throw new Error('oops')
});
app.use((err, request, response, next) => {
    // log the error, for now just console.log
    console.log(err)
    response.status(500).send('Something broke!')
});


/**
 * Rendering HTML
 * 
 */
const path = require('path'),
    express = require('express'),
    exphbs = require('express-handlebars'),
    app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts');
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));