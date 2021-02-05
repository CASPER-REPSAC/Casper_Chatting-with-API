/*  models/chatSch.js  */

const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    userid:{type: String, require: true, unique: true},
    passwd:{type: String, require: true},
    nickname:{type: String, require: true, unique: true}
},
{
    timestamp: true
});

module.exports = mongoose.model('Chat',chatSchema);
