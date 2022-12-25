//import express from 'express'; //replace it with const express = require('express');
//node -v = v16.18.0  npm - v = 8.19.2
// mongoDB atlas passwrd = bWxjrRgLjhGaLzMy
// command to run nodemon "npm run dev" 

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');              //To instruct passport to use cookieSession
const keys = require('./config/keys');
require('./models/User');           //The sequence of creating objects has to be maintained
require('./services/passport');     // We are not exporting from the passport.js so no need to create const

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);     //reuire will return a function, we then immediately call that function with app object

const PORT = process.env.PORT || 5000;            //In production heroku will provide the port number, for local we can specify 5000
app.listen(PORT);