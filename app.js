const express = require('express');
// const chalk = require('chalk');
const debug = require('debug')('app')
const morgan = require('morgan');
const path = require('path');

// const deb = debug('app')
const app = express();
const port = process.env.port;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
    res.send('Hello Mark Phongsakorn');
})

app.listen(port, () => {
    // console.log("Listening on port: " + chalk.green(port));
    debug("Listening on port: " + port);
})