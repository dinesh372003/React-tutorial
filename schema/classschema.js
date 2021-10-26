const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const classSchema=new Schema(
{
    classname:
    {
        type:String,
        required:true,
    },
    classcode:
    {
        type:String,
        required:true,
    },
    mainteacher:
    {
        type:[Object],
        required:true,
    },
    subteacher:
    {
        type:[Object],
    },
    subjects:
    {
        type:[Object],
    },
    students:
    {
        type:[Object],
    },
},{timestamps:true});
const Class=mongoose.model("Class",classSchema);
module.exports=Class;
