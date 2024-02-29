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

router.put('/:id', (req, res) => {
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
    db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

// DELETE comment route
router.delete('/:id/comment/:commentId', (req, res) => {
    const commentId = req.params.commentId
    const placeId = req.params.id
    // Delete the comment.
    db.Comment.findByIdAndDelete(commentId).then(() => {
        // Delete the comment from the place's comments array.
        db.Place.findById(placeId).then(place => {
            place.comments = place.comments.filter(comment => comment.id !== commentId)
            place.save()
            res.redirect(`/places/${place.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// EDIT comment form display (GET)
router.get('/:id/comments/:commentId/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.findById(req.params.commentId)
        .then(comment => {
            res.render('comments/edit', { place, comment })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})

// EDIT comment form submit (PUT)
router.put('/:id/comments/:commentId', (req, res) => {
    const placeId = req.params.id
    const commentId = req.params.commentId
    let commentData = req.body
    commentData.rant = commentData.rant === 'on'
    commentData.stars = parseFloat(commentData.stars)
    db.Comment.findByIdAndUpdate(commentId, commentData).then(() => {
        res.redirect(`/places/${placeId}`)
    })
    .catch(err => {
        res.render('error404')
    })
});

module.exports = router
