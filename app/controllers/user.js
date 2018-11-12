const User = require('../models/user');
const mongoose = require('mongoose');
//Создаю пользователя
const createUser = (req, res) => {
    User.create(req.body)
        .then(data => res.json(data));
}
//Все пользователи
const getAllUsers = (req, res) => {
    User.find()
        .exec()
        .then(data => res.json(data));
}
//Обновить инфу
const updateUser = (req, res) => {
    User.findByIdAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(data => res.json(data));
}
//Сортировка по city
const getCityInfo = (req, res) => {
    User.find({'city': mongoose.Types.ObjectId(req.params.id)})
        .exec()
        .then(data => res.json(data))
}
const deleteUser = (req, res) => {
    User.deleteOne({id: req.params.id})
        .exec()
        .then(data => res.json({msg: success}))
}
module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    getCityInfo,
    deleteUser
}