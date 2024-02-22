const db = require('../models')

db.Place.create([{
    name: 'Toadstool Cafe',
    city: 'Universal City',
    state: 'CA',
    cuisines: 'American, Cafe',
    pic: '/images/toadstool-cafe.jpg',
    founded: 2023
}, {
    name: 'ARTBOX Hello Kitty Cafe',
    city: 'Brighton',
    state: 'UK',
    cuisines: 'Cafe, Boutique',
    pic: '/images/hello-kitty-cafe.jpg',
    founded: 2019
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})