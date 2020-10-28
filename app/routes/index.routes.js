module.exports=(app)=>{
    var index = require('../controllers/temp.controller');
   app.get('/', index.render);
    app.post('/add', index.render);
}