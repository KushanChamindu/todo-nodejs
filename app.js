var PORT = process.env.PORT || 3000;
var express=require('express');
var todoController=require('./controllers/todoController');

var app=express();
//set a template engine
 app.set('view engine','ejs');

 //static files
 app.use(express.static('./public'));

//fire controllers
todoController(app);

 //listen port 
 app.listen(PORT);
console.log('You are listening to port 3000');