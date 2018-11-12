const City = require('../models/city');

const createCity = (req, res) => {
    City.create(req.body)
        .then(data => res.json(data));
}

const getAllCity = (req, res) => {
    City.find()
        .exec()
        .then(data => res.json(data));
}

module.exports = {
    createCity,
     getAllCity
}