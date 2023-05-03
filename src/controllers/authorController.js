const AuthorModel= require("../models/authorModel")
const publisherModel = require("../models/publisherModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}


const createpublisher= async function (req, res) {
    let pub = req.body
    let pubCreated = await publisherModel.create(pub)
    res.send({data: pubCreated})
}
module.exports.createAuthor= createAuthor
module.exports.createpublisher=createpublisher