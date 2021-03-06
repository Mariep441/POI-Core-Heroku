'use strict';

require('dotenv').config();

const Mongoose = require('mongoose');

Mongoose.set('useNewUrlParser', true);
Mongoose.set('useUnifiedTopology', true);

Mongoose.connect("mongodb+srv://POI:POI123@cluster0-d2okb.mongodb.net/test?retryWrites=true&w=majority");
const db = Mongoose.connection;

async function seed() {
    var seeder = require('mais-mongoose-seeder')(Mongoose);
    const data = require('./seed-data.json');
    const Point = require('./point');
    const User = require('./user');
    const dbData = await seeder.seed(data, { dropDatabase: false, dropCollections: true });
    console.log(dbData);
};



db.on('error', function(err) {
    console.log(`database connection error: ${err}`);
});

db.on('disconnected', function() {
    console.log('database disconnected');
});

db.once('open', function() {
    console.log(`database connected to ${this.name} on ${this.host}`);
    seed();
});
