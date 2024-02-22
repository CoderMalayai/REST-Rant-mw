const mongoose = require('mongoose')
const { Schema } = mongoose
//const db = require('../models')

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: {type: String, default: 'https://i.pinimg.com/564x/36/b5/6d/36b56d1a4c5f2350d23661dff439f6bb.jpg'},
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, required: 'USA'},
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    }
});

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded} .`
}

module.exports = mongoose.model('Place', placeSchema)