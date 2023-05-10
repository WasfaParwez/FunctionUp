const jwt= require("jsonwebtoken")

const middle=async function(req,res,next){
    let token=req.headers["x-auth-token"]
    if (!token){res.send({msg:"no token found"})}

    let verify=jwt.verify(token,"functionup-technetium-very-secret-key")
    if (verify==false){
        res.send({msg:"token is invalid"});
    }
    next()
}

module.exports.middle=middle