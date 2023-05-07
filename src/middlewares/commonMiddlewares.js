
const mid1= function ( req, res, next) {
    head=req.headers["isfreeappuser"]
    console.log(req.headers)
    if(!head){
        res.send("the request is missing a mandatory header")
    }
    next()
}

module.exports.mid1= mid1

