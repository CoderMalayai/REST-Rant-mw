// Config
require('dotenv').config();
const PORT = process.env.PORT;
// const MONGO_URI = process.env.MONGO_URI;
console.log(PORT);

// Modules and Globals
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const render = require('./render')
// const mongoose = require('mongoose');

// Database connection
//  mongoose.connect(MONGO_URI)
//      .then(() => {
//          console.log('connected to mongo: ' + MONGO_URI);
//      })
//      .catch((err) => {
//          console.log('Error connecting to mongo: ' + err);
//      });

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extented: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('home');
});

// Load the places controller
app.use('/places', require('./controllers/places'));

// wildcard/ 404 route
app.get('*', (req, res) => {
    res.render('error404')
});

// Connections
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

module.exports = app;