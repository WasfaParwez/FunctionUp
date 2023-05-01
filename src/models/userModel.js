const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
        
        author_id:{type:String, required:true},

        author_name:String,

        age:Number,

        address:String
    


}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array