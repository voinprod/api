const User = require('../models/user');
const mongoose = require('mongoose');
const cron = require("node-cron");

//Создаю пользователя
const createUser = (req, res) => {
    User.create(req.body)
        .then(data => res.json(data));
}
//Все пользователи
let onPage = 5;
let page = 0;
const getAllUsers = async (req, res) => {
    let count =  await User.count('tasks').exec();
    if (req.params['action'] == 'tasks'){
       User.find({})
            .sort({'tasks': -1 })
            .limit(5)
            .populate('city')
            .exec()
            .then(data => res.json(data));
    }else if (req.params['action'] == 'more'){
        User.find({})
            .skip(onPage)
            .limit(onPage)
            .sort({'tasks': -1 })
            .populate('city')
            .exec()
            .then(data => {
                console.log(page);
                (page == count) ? page = 0 : page;
                return res.json(data)
            });
    }
}

//Обновить инфу
const updateUser = (req, res) => {
    let query = { '_id': req.params.id };
    User.findByIdAndUpdate(query, req.body)
        .exec()
        .then(data => res.json(data));
}

const getCityInfo = (req, res) => {
    User.find({ 'city': mongoose.Types.ObjectId(req.params.id) })
        .exec()
        .then(data => res.json(data))
}

const deleteUser = (req, res) => {
    User.find({ '_id': req.params.id })
        .remove()
        .exec()
        .then(() => res.json({ msg: 'success' }))
        .catch(err => res.json(err));
}
const deleteAllUsers = (req,res) => {
    User.find({}).remove().exec().then(() => res.json({msg: 'Success'}));
}
const getOneUser = (req, res) => {
    User.find({ '_id': req.params.id })
        .exec()
        .then(data => res.json(data));
}
module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    getCityInfo,
    deleteUser,
    getOneUser,
    deleteAllUsers
}