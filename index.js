// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extented: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('Home');
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