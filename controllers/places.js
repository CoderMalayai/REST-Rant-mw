const router = require('express').Router()
const places = require('../models/places.js')

// Places //
router.get('/', (req, res) => {
    res.render('places/index', { places })
})
// Places end //

// Add new places //
router.get('/new', (req, res) => {
    res.render('places/new')
})
// Add new places end //

// Default auto info //
router.post('/', (req, res) => {
    if (!req.body.pic) {
        req.body.pic = "https://images.unsplash.com/photo-1636370395847-e0781efa45e6?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    if (!req.body.city) {
        req.body.city = "Las Vegas"
    }
    if (!req.body.state) {
        req.body.state = "USA"
    }
    places.push(req.body)
    res.redirect('/places')
})
// Default auto info end //

// Show page //
router.get ('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id]})
    }
})
// Show page //

module.exports = router