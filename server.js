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

app.use(cors());
// app.use(function (request, res, next) {
//             res.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', '*');
    //intercept the OPTIONS call so we don't double up on calls to the integration
    // app.use((req, res, next) => {
    //     res.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");
    //     res.header(
    //       "Access-Control-Allow-Headers",
    //       "Origin, X-Requested-With, Content-Type, Accept"
    //     );
        // next();
    //   }); 
    //  });
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
    const classes = new Class();
    classes.classname=req.body.teamname;
    classes.mainteacher=req.body.teacher;
    classes.subteacher=req.body.teacher;
    classes.save()
    .then((result)=>
    {
        console.log(req.body.userid);
        console.log(result.id);
        User.findOneAndUpdate(
            {
                _id:req.body.userid,
            },
            {
                $push:
                {
                    classes:result.id,
                    classname:req.body.teamname,
                },
            })    
            .then(result=>console.log(result))
            .catch(err=>console.log(err));  
    })
    .catch(err=>console.log(err));
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
