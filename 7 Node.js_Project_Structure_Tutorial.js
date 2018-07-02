/* 
    Node.js Project Structure Tutorial:
    ===================================

    5 simple guideline principles for structuring your Node.js Apps:
    ==============================

    1 organize your files around Features not roles.
    ------------------------------------------------

    // Don't

    ├── controllers
    |   ├── product.js
    |   └── user.js
    ├── models
    |   ├── product.js
    |   └── user.js
    ├── views
    |   ├── product.hbs
    |   └── user.hbs


    DO


    ├── product
    |   ├── index.js
    |   ├── product.js
    |   └── product.hbs
    ├── user
    |   ├── index.js
    |   ├── user.js
    |   └── user.hbs


    2. Don't put logic inside index.js files:
    -----------------------------------------


    // product/index.js
    var product = require('./product')

    module.exports = {
    create: product.create
    }

    3. Place Your Test Files Next to The Implementation:
    ----------------------------------------------------

    *  Tests are not just for checking whether a module produces the expected output, they also document your modules.


    4. Use a config Directory:
    --------------------------
    Place config files inside a config folder.

    ├── config
    |   ├── index.js
    |   └── server.js
    ├── product
    |   ├── index.js
    |   ├── product.js
    |   ├── product.spec.js
    |   └── product.hbs



    5. Put Your Long npm Scripts in a scripts Directory:
    -----------------------------------------------------

    Create a separate directory for your additional long scripts in package.json

    ├── scripts
    |   ├── syncDb.sh
    |   └── provision.sh
    ├── product
    |   ├── index.js
    |   ├── product.js
    |   ├── product.spec.js
    |   └── product.hbs

*/