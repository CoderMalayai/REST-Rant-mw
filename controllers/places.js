const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Toadstool Cafe',
        city: 'Universal City',
        state: 'CA',
        cuisines: 'American',
        pic: '/images/toadstool-cafe.jpg'
    }, {
        name: 'Hello Kitty & Friends',
        city: 'Brighton',
        state: 'UK',
        cuisines: 'Coffee, Bakery',
        pic: '/images/hello-kitty-cafe.jpg'
    }]
    res.render('places/index', { places })
})

module.exports = router