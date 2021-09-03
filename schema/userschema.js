const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserSchema=new Schema(
{
    name:
    {
        type:String
    },
    teams:
    {
        type:[String]
    }
},{timestamps:true});
const user=mongoose.model("User",UserSchema);
module.exports=user;
