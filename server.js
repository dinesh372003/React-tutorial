const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require("dotenv").config();
const{PORT,MONGODB_USERNAME,MONGODB_PASSWORD}=process.env;
const User=require('./schema/userschema');
const Class=require('./schema/classschema');
app.use(bodyParser.json());
const path = require('path');
const database="mongodb+srv://"+MONGODB_USERNAME+":"+MONGODB_PASSWORD+"@school.0eq55.mongodb.net/Project?retryWrites=true&w=majority";
var data;

const randomcode=(datas)=>
{
    var doesalreadyexists=false;
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9"]            
    var code = "";
    for (var i=0;i<6;i++)
    {
        code+=letters[Math.floor(Math.random()*letters.length)];
    }
    Class.find()
    .then((result)=>
    {
        result.forEach(classes=>
            {
                if(classes.classcode==code)
                {
                    doesalreadyexists=true;
                }
            })
            if(doesalreadyexists==false)
            {
                storeclass(code,datas);
            }
            else
            {
                randomcode(datas);
            }
        })
        .catch(err=>console.log(err));   
}


const storeclass=(code,datas)=>
{
    const classes = new Class();
    classes.classcode=code;
    classes.classname=datas.teamname;
    classes.mainteacher=datas.teacher;
    classes.subteacher=datas.teacher;
    classes.save()
    .then((result)=>
    {
        User.findOneAndUpdate(
            {
                _id:datas.userid,
            },
            {
                $push:
                {
                    classes:result.id,
                    classname:datas.teamname,
                },
            })    
            .then(result=>{})
            .catch(err=>console.log(err));  
    })
    .catch(err=>console.log(err));
}

app.use(cors());
app.listen(PORT);
console.log("Listening on port "+PORT);
//Connect mongoDB
mongoose.connect(database,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>
    {
        console.log("Connected MongoDb...");
    })
    .catch((err)=>console.log(err))
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
app.get("/api/classes",(req,res)=>
{
    Class.find()
    .then(datas=>
        {
            data=datas;
            res.json(datas);
        })
    .catch(err=>console.log(err));
})
app.post("/api/classes",(req,res)=>
{
    datas=req.body;
    randomcode(datas);
})
// app.use(express.static(path.join(__dirname, '/client/build')));
// app.get('/', function (req,res) 
// {
//     res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });
// app.get("/user/login",(req,res)=>
// {
//     res.sendFile(path.join(__dirname, '/client/build', 'login.html'));
// })
// app.readFile("./client/public/index.html", function(err, data) {
//      data = JSON.parse(data);
//     // ...
//     })
