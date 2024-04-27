import chalk from 'chalk';
import express from 'express';
import debug from 'debug';
import morgan from 'morgan';

const deb = debug('app')
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send('Hello Mark Phongsakorn buppha');
})

app.listen(port, () => {
    // console.log("Listening on port: " + chalk.green(port));
    deb("Listening on port: " + chalk.green(port));
})