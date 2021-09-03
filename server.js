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
app.get("/",(req,res)=>
{
    res.send("Your setup is ok");
})

//Connect mongoDB
mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(result=>
        {
            const users=new User({name:"M.Dinesh",team:"ABCD"})
            users.save()
            .then(result=>console.log("Dinesh saved"))
            .catch(err=>console.log(err));
        })
    .catch(err=>console.log(err));

//Make Router
