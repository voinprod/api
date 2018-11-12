const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    login: String,
    password: String,
})

const Admin = module.exports = mongoose.model('Admin', AdminSchema);