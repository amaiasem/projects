const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const { connect } = require('mongoose');

const cardsRouter = require('./src/router/cardsRouter');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const { DDBB } = process.env;

connect(DDBB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/todo-cards', cardsRouter);

app.listen(port, () => debug(`Server running in http://localhost:${port}`));
