const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cookie = require('cookie-parser');

app.use(express.json());
app.use(cookie());
app.get('/api/v1', (req,res)=>{
    res.status(200).send({
        error:'null',
        data:'route setup server success'
    });
    
});

module.exports = http;

