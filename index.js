//import express from 'express'; //replace it with const express = require('express');
//node -v = v16.18.0  npm - v = 8.19.2

const express = require('express');
require('./services/passport');     // We are not exporting from the passport.js so no need to create const

const app = express();

require('./routes/authRoutes')(app);     //reuire will return a function, we then immediately call that function with app object

const PORT = process.env.PORT || 5000;            //In production heroku will provide the port number, for local we can specify 5000
app.listen(PORT);