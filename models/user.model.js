const  mongoose  = require('mongoose');
const bcypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'firstname should be atleast 3 characters']
        },
        lastname
        :{
            type:String,
            required:true,
        }
    },
    email:{
        type:String,
        required:true,
        minlength:[6,'email should be atleast 8 characters']
    },
    password:{
        type:String,
        required:true,
        select:false
    },
     
    socketId:{
        type:String
    },
 });

 userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;}
    userSchema.methods.comparePassword = async function(password){
        return await bcypt.compare(password,this.password);
    } 
    userSchema.statics.hashPassword = async function(password){
        return await bcypt.hash(password,10);
    }


    module.exports = mongoose.model('user',userSchema);