const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
    tasks: String,
    city: [{
        type: Schema.Types.ObjectId,
        ref: 'City',
    }]
})
module.exports = mongoose.model('User', UserSchema);