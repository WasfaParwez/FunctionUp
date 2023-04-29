const mongoose = require('mongoose');

// Create a books collection in your DB ( using bookModel with following fields)- bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

const bookSchema = new mongoose.Schema( {

    bookName: {type : String,
                required: true},

                
    authorName: String,


    price:{IndianPrice: Number,
            EuropeanPrice: Number},

    year: {type : String,
            default : 2021},


    tags:  [String],

    totalPages: Number,

    stockAvailable:Boolean,
    


}, { timestamps: true });

module.exports = mongoose.model('BOOK', bookSchema) //users



// String, Number
// Boolean, Object/json, array