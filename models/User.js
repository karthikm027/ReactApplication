const mongoose = require('mongoose');
const { Schema } = mongoose;   //mongoose object has a property called Schema, take that property and assign it to a new var Schema

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users',userSchema);  //Telling mongoose to create model class if it does not already exist