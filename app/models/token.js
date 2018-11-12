const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    tokenId: String,
    userId: String,
})

const Token = module.exports = mongoose.model('Token', TokenSchema);