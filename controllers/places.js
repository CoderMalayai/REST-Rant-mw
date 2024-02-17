const router = require('express').Router()
const db = require('../models')
//const places = require('../models/places.js')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', {places})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', {place})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
// Places //
//router.get('/', (req, res) => {
//    res.render('places/index', { places })
//})
// Places end //

// Add new places //
//router.get('/new', (req, res) => {
//    res.render('places/new')
//})
// Add new places end //

// Default auto info //
//router.put('/:id', (req, res) => {
//    let id = Number(req.params.id)
//    if (isNaN(id)) {
//        res.render('error404')
//    }
//    else if (!places[id]) {
//        res.render('error404')
//    }
//    else {
//       if (!req.body.pic) {
//            req.body.pic = 'https://images.unsplash.com/photo-1636370395847-e0781efa45e6?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//        }
//        if (!req.body.city) {
//           req.body.city = 'Las Vegas'
//        }
//        if (!req.body.state) {
//            req.body.state = 'USA'
//        }
//        places[id] = req.body
//        res.redirect(`/places/${id}`)
//    }
//})
// Default auto info end //

// Show page //
//router.get ('/:id', (req, res) => {
//    let id = Number(req.params.id)
//    if (isNaN(id)) {
//        res.render('error404')
//    }
//    else if (!places[id]) {
//        res.render('error404')
//    }
//    else {
//        res.render('places/show', {place:places[id], id: id})
//    }
//})
// Show page //

// Edit page //
//router.get('/:id/edit', (req, res) => {
//    let id = Number(req.params.id)
//    if (isNaN(id)) {
//        res.render('error404')
//    }
//    else if (!places[id]) {
//        res.render('error404')
//    }
//    else {
//        res.render('places/edit', {place:places[id], id: id})
//    }
//})
// Edit page end //

// Delete page //
//router.delete('/:id', (req, res) => {
//    let id = Number(req.params.id)
//    if (isNaN(id)) {
//        res.render('error404')
//    }
//    else if (!places[id]) {
//        res.render('error404')
//    }
//    else {
//        places.splice(id, 1)
//        res.redirect('/places')
//    }
//})
// Delete page //