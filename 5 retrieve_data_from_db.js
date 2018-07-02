/**
 * 
 * Retrieve data from database:
 * ===========================
 * 
 * Ways of storing data in Node.js aps:
 * --------------------------------
 */


const users = [];
app.post('/users', (req, res, next) => {
    const user = req.body;
    users.push({
        name: user.name,
        age: user.age
    });
    res.send('successfully registered');
});

/**
 * This way you can store the users in a global variable, which will reside in memory for the lifetime of your application.
 * 
 * Demerits:
 * =========
 *  * RAM is expensive,
 *  * memory resets each time you restart your application,
 * If you don't clean up, sometimes you'll end up with stack overflow.
 */



/* Storing data in files */
const fs = require('fs');
app.post('/users', (req, res, next) => {
    const user = req.body;
    fs.appendFile('users.txt', JSON.stringify({
        name: user.name,
        age: user.age
    }), (err) => {
        res.send('Successfully registered');
    });
});


/* Demerits 

    * Appending is okay, but think about updating or deleting.
    * If we're working with files, there is no easy way to access them in parallel.



    Storing data in SQL database;
    =============================

    * Query language designed to work with relational db's.
    * The data itself will be stored in tables.
    * These schemas will provide a skeleton for the data you'll put in there.
    *

    Advantages:
    ===========

    *  SQL enables communicating with DB's and receive answers for complex queries within seconds.
    * Views data before storing it.


    Storing data in a NoSQL database:
    =================================

    *   NoSQL databases have become quite popular in the last decade
    *  With NoSQL you don't have to define a schema and you can store any arbitrary JSON

    Advantages:
    ===========

    *   NoSQL can handle large volumes of structured, semi-structured, and unstructured data
    *   Interacts quickly.
    *   Flexible and object-oriented
    *   Has an efficient, scale-out architecture


    Node.js and PostgreSQL:
    =======================

    CREATE TABLE users(name VARCHAR(20),age SMALLINT )
*/



/*  Simple example using PostgreSQL*/
'use strict';
const pg = require('pg'),
    conString = 'postgres://username:password@localhost/node_hero';

pg.connect(conString, (err, client, done) => {
    if (err) {
        return console.error('error fetching client from pool', err);
    }
    client.query('SELECT $1::varchar AS my_first_query', ['node hero'], (err, result) => {
        done();
        if (err) {
            return console.error('error happened during query', err)
        }
        console.log(result.rows[0])
        process.exit(0)
    });
});


/* Route to store users in DB */
app.post('/users', (req, res, next) => {
    const user = req.body;
    pg.connect(conString, (err, client, done) => {
        if (err) {
            return next(err);
        }
        client.query('INSERT INTO users (name,age) VALUES ($1,$2)', [user.name, user.age], (err, result) => {
            done();
            if (err) {
                return next(err);
            }
            res.send(200);
        });
    });
});


/* Route to retrieve users data from DB */
app.get('/users', (req, res, next) => {
    pg.connect(conString, (err, client, done) => {
        if (err) {
            return next(err);
        }
        client.query('SELECT name,age FROM users;', [], (err, result) => {
            done();
            if (err) {
                return next(err);
            }
            res.json(result.rows);
        });
    });
});