const mongoose = require('mongoose');
const moment = require('moment');
moment.locale('ru');
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
    tasks: Number,
    city: [{
        type: Schema.Types.ObjectId,
        ref: 'City',
    }],
    date: { type: String, default: moment().format('MMMM Do YYYY, HH:mm:ss') },
})
module.exports = mongoose.model('User', UserSchema);