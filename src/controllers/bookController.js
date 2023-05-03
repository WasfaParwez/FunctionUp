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

// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)

const publishedby = async function (req, res) {
    let data = await bookModel.updateMany(
      { publisher_id: { $in: ["64514d006c1c946c6e3394d1", "64520e3b02af7607baa290e4"] } },
      { isHardcover: true },
      { new: true}
    );
    // res.send({ data: data });

    let datarate= await bookModel.updateMany(
        {"author_id.rating": {$gt: 3.5}},
        { $inc: { price: 10 } },
        {new:true}
    )
    res.send({data:data,rate:datarate})
  };
  
 

module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.publishedby=publishedby
