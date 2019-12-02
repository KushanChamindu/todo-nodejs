const bodyParser=require('body-parser');

const mysql=require('mysql');
//Create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'todo' 
});
//Connect
db.connect((err)=>{
    if(err){
        console.log(err);
        throw err;
    }else{
    console.log("Mysql Connected..");}
});
var urlencodedParser=bodyParser.urlencoded({extended:false});
module.exports=function(app){

    app.get('/todo',function(req,res){
        let sql='SELECT * FROM todos';
        let query=db.query(sql,(err,results)=>{
            if(err) {throw err;}else {console.log(results); res.render('todo',{todos:results});}
        });
    });

    app.post('/todo',urlencodedParser,function(req,res){
        // console.log(req.body);
        let sql='INSERT INTO todos SET ?';
        let query=db.query(sql,req.body,(err,result)=>{
            if(err) {throw err;}else {console.log(result);res.json(result)};
        });
        
    });

    app.delete('/todo/:ID',function(req,res){
        // data=data.filter(function(todo){
        //     return todo.item.replace(/ /g,'-') !== req.params.item;  
        // });
        var deleted_item=parseInt(req.params.ID);
        let sql=`DELETE FROM todos WHERE ID=${deleted_item}`;
        let query=db.query(sql,(err,result)=>{
            if(err) {console.log(err);}else {console.log(result); res.json(result)};

        });
    });
} 