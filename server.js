const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require("dotenv").config();
const{PORT,MONGO_URL}=process.env;
const User=require('./Schema/userschema');
app.use(bodyParser.json());



app.listen(PORT);
console.log("Listening on port "+PORT);

//Connect mongoDB
mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>console.log("MongoDB connected.."))
    .catch(err=>console.log(err));

app.get("/",(req,res)=>
{
    User.find()
    .then(datas=>
        {
            res.json(datas);
        })
    .catch(err=>console.log(err));
})