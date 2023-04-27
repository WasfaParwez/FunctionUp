const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type : 'string',
                required: true},
    authorName: {type : 'string',
    required: true},
    category: {
        type: String,
        enum: ["adventure","romance","fanatasy","self-help","autoBiography"] 
    },
    year: Number,

}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //users



// String, Number
// Boolean, Object/json, array