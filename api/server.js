const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./data/auth/auth-router');

const jsonErrorHandler = async (err, req, res, next) =>
{
    res.header("Content-Type", 'application/json');

    res.status(err.status).send(JSON.stringify(err));
};

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', authRouter);
server.use(jsonErrorHandler);

module.exports = server;