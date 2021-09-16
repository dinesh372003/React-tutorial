const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require("dotenv").config();
const{PORT,MONGODB_USERNAME,MONGODB_PASSWORD}=process.env;
const User=require('./schema/userschema');
app.use(bodyParser.json());
const path = require('path');
const database="mongodb+srv://"+MONGODB_USERNAME+":"+MONGODB_PASSWORD+"@school.0eq55.mongodb.net/Project?retryWrites=true&w=majority";
var data;


app.listen(PORT);
console.log("Listening on port "+PORT);
//Connect mongoDB
mongoose.connect(database,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>
    {
        console.log("Connected MongoDb...");
    })
    .catch((err)=>console.log(err))
    app.use(express.static(path.join(__dirname, '/client/build')));
app.get("/api/users",(req,res)=>
{
    User.find()
    .then(datas=>
        {
            data=datas;
            res.json(datas);
        })
    .catch(err=>console.log(err));
})
app.get('/', function (req,res) 
{
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
app.get("/user/login",(rea,res)=>
{
    res.sendFile(path.join(__dirname, '/client/build', 'login.html'));
})
// app.readFile("./client/public/index.html", function(err, data) {
//      data = JSON.parse(data);
//     // ...
//     })
