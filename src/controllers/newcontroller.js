const UserModel = require("../models/userModel");
const BookModel = require("../models/bookModel");

const listing = async function(req, res) {
  let user = await UserModel.findOne({ author_name: "Chetan Bhagat" });
  let books = await BookModel.find( {author_id: user.author_id}).select({ author_id: 1, name: 1, _id: 0 });
  res.send({ msg: books });
};



const twostates = async function(req,res){
    let thebook = await BookModel.findOneAndUpdate(
        {name:"Two states"},
        {price:100},
        {new:true}

    );
    let theuser = await UserModel.findOne({author_id:thebook.author_id}).select({author_name:1,_id:0});
    console.log(theuser);
    res.send({msg:theuser,price:thebook.price});
}



// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 


// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) 

let names= async function(req,res){
    let data=await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
    let audata= await Promise.all( 
        data.map(async(element)=>{
            return await UserModel.find(element).select({author_name:1,_id:0})

        })
    )
    res.send(audata);
}


module.exports.listing = listing;
module.exports.twostates = twostates;
module.exports.names=names