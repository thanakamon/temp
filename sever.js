var mongoose = require('./config/mongoose');
var express = require('./config/express');
var db = mongoose();
var app = express();
app.listen(3008);

module.exports = function () {
    require('../app/routes/indextemp.routes')(app);

}
console.log('server runing');