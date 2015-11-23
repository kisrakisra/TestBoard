
var mongoose = require('mongoose');


module.exports = mongoose.model('Prop', {
    appName: String,
    appVersion: String
});