const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let au=book.author_id;
    let pu=book.publisher_id;
    if (!au){
        res.send("error author id is compulsory")
    }
    else if(!pu){
        res.send("error publisher id is compulsory")
    }
    else{
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})}
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate("publisher_id")

    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
