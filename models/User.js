const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:{
        required:true,
        type:String,
        trim:true
    },
    email:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String,
    },
    balance:Number,
    income:Number,
    expense:Number,
    transactions:{
        type:[{
            type:Schema.Types.ObjectId,
            ref:'Transaction'  
        }]
    }
})

const User = mongoose.model('User',UserSchema)

module.exports = User