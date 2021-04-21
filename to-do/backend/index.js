const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const { connect } = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT;
const { DDBB } = process.env;

connect(DDBB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.listen(port, () => debug(`Server running in http://localhost:${port}`));
