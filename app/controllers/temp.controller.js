const { temp } = require('../models/temp.model');

var render=(req,res)=>{
temp.find({},(err,data)=>{
    if(!err)res.render('index',{tempData:data});
});
}
var add =(req,res)=>{
     var t = temp.insertMany(req,body);
     res.json(t)
}
   
module.exports={
    render,
    add
}