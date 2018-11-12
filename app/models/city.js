const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('City', CitySchema);