var mongoose = require('mongoose');

// Subdocument schema for votes
var tawVoteSchema = new mongoose.Schema({ ip: 'String' });

// Subdocument schema for poll choices
var secTawsiyeSchema = new mongoose.Schema({
    text: String,
    votes: [tawVoteSchema]
});

// Document schema for polls
exports.TawsiyeSchema = new mongoose.Schema({
    askTawsiye: { type: String, required: true },
    choices: [secTawsiyeSchema]
});