const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Toadstool Cafe',
        city: 'Universal City',
        state: 'CA',
        cuisines: 'American',
        pic: 'https://www.supercutekawaii.com/wp-content/uploads/PXL_20230926_214608832-819x1024.jpg'
    }, {
        name: 'Hello Kitty & Friends',
        city: 'Brighton',
        state: 'UK',
        cuisines: 'Coffee, Bakery',
        pic: 'https://www.supercutekawaii.com/wp-content/uploads/280566784_1175098709955648_4188287643980400852_n.jpg'
    }]
    res.render('places/index', { places })
})

module.exports = router