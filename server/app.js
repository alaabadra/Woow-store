const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cookie = require('cookie-parser');
const router = require('./routes');
app.use(express.json());
app.use(cookie());
app.use('/api/v1', router);

module.exports = http;

