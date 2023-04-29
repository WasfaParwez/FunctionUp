const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const CreateBook = async function(req,res){
    let data2=req.body
    let DatatoSave=await UserModel.create(data2)
    res.send({msg: DatatoSave})


}

const Booklist=async function(req, res){
    userselect= await UserModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({msg:userselect})
}

const getBooksInYear=async function(req, res){
    let datayear=req.body.year
    let BookYear= await UserModel.find({year:datayear})
    res.send({msg:BookYear})
}

const getParticularBooks3 =async function(req, res){
    let Objkey=Object.keys(req.body)
    let Objvalue=Object.values(req.body)
    let get={}
    get[Objkey]=Objvalue
    let getparticular= await UserModel.find(get)
    res.send({msg:getparticular})
}

const getXINRBooks = async function(req, res){
    let xinrBooks = await UserModel.find({
        $or: [
            {"price.IndianPrice": 100},
            {"price.IndianPrice": 200},
            {"price.IndianPrice": 500}
        ]
    });
    res.send({msg: xinrBooks});
}


const getRandomBooks=async function(req,res){
    let getrandom= await UserModel.find({$or:[{"price.IndianPrice":500},{"stockAvailable":true}]})
    res.send({msg:getrandom})
}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.CreateBook=CreateBook
module.exports.Booklist=Booklist
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks3 = getParticularBooks3
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks