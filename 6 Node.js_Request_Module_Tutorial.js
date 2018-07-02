/*
    Request Module in Node.js:
    ==========================

    What is HTTP:
    ============
    
    HTTP stands for Hypertext Transfer protocol.
    Request-Response protocol in client-server computing model

    HTTP Status Codes:
    =================

    1xx
    2xx
    3xx
    4xx
    5xx

    Using the Node.js Request Module:
    =================================
*/

const request = require('request'),
    options = {
        method: 'GET',
        json: true,
        uri: 'https://risingstack.com',
        qs: {
            limit: 10,
            skip: 20,
            sort: 'asc'
        },
        headers: {
            'User-Agent': 'Request-Promise',
            'Authorization': 'Basic QWxhZGRpbjpPcGVuU2VzYW1l'
        }
    },
    options2 = {
        method: 'POST',
        json: true,
        body: {
            foo: 'bar'
        }
    }


request(options).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


/* AccuWeather​ API */

const express = require('express'),
    rp = require('request-promise'),
    exphbs = require('express-handlebars'),
    app = express();

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/:city', (res, res, next) => {
    rp({
        uri: 'http://apidev.accuweather.com/locations/v1/search',
        json: true,
        qs: {
            q: req.params.city,
            apiKey: 'api-key'
        }
    }).then((data) => {
        res.render('index', data);
    }).catch((err) => {
        console.log(err);
        res.render('error');
    });
});
app.listen(3000);