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
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            req.body.pic = 'https://images.unsplash.com/photo-1636370395847-e0781efa45e6?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        if (!req.body.city) {
            req.body.city = 'Las Vegas'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
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
        res.render('places/show', {place:places[id], id: id})
    }
})
// Show page //

// Edit page //
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', {place:places[id], id: id})
    }
})
// Edit page end //

// Delete page //
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})
// Delete page //

module.exports = router