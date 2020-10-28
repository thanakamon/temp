var mongoose = require('mongoose');

module.exports = function () {
    mongoose.set('debug', config.debug);
    var db = mongoose.connect('mongodb://localhost/s60030031');
    require('../app/models/temp.model');
    return db;
};