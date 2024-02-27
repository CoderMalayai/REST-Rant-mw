const router = require('express').Router()
const render =require('../render')
const db = require('../models')
//const places = require('../models/places.js')

router.get('/new', (req, res) => {
    res.send(render('places/new'))
})

router.post('/', (req, res) => {
    const newPlace = Object.fromEntries(
        Object.entries(req.body).filter(([_, value]) => value !== '')
    )
    db.Place.create(newPlace)
    .then((place) => {
        res.redirect('/places')
    })
    .catch(err => {
        if (err && err.name == 'ValidationError') {
            let message = 'Validation Error: '
            for (var field in err.errors) {
                message += `${field} was ${err.errors[field].value}.`
                message += `${err.errors[field].message}`
            }
            res.render('places/new', { message })
        }
        else {
            res.render('error404')
        }
    })
})

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.send(render('places/index', { places }))
    })
    .catch((err) => {
        console.log(err)
        res.status(404).send(render('Error404'))
    })
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
        res.send(render('places/show', { place }))
    })
    .catch((err) => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/:id/edit', (req, res) => {
    db.Place.findById( req.params.id)
        .then((place) => {
            res.send(render('places/edit', { place }))
        })
        .catch((err) => {
            console.log(err)
            res.status(404).send(render('Error404'));
        })
})

router.put('/id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.put('/:id', (req, res) => {
    db.PLace.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedPlace) => {
            res.redirect(`/places/${updatedPlace.id}`)
        })
        .catch((err) => {
            console.log(err)
            res.status(404).send(render('Error404'));
        })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/places')
        })
        .catch((err) => {
            console.log(err)
            res.status(404).send(render('Error404'))
        })
})

router.get('/:id/comments/new', (req, res) => {
    db.Place.findById(req.params.id)
        .then((place) => {
            res.send(render('comments/new', { place }))
        })
        .catch((err) => {
            console.log(err)
            res.status(404).send ('Not Found')
        })
})

router.post('/:id/comments', (req, res) => {
    let commentData = req.body
    commentData.rant = commentData.rant === 'on'
    commentData.stars = parseFloat(commentData.stars)
    db.Comment.create(commentData)
        .then((comment) => {
            db.Place.findById(req.params.id)
                .then((place) => {
                    place.comments.push(comment)
                    place.save()
                    res.redirect(`/places/${place._id}`)
                })
                .catch((err) => {
                    console.log(err)
                    res.status(404).send('Not Found')
                })
        })
})

router.delete('/:id/rant/:rantId', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/:id/comments/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
})

module.exports = router