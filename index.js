//import express from 'express'; //replace it with const express = require('express');
//node -v = v16.18.0  npm - v = 8.19.2

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({bye: 'brother'});
});

const PORT = process.env.PORT || 5000;            //In production heroku will provide the port number, for local we can specify 5000
app.listen(PORT);