const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "technetium",
      organisation: "FunctionUp",
    },
    "functionup-technetium-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);
//     let decodedToken = jwt.verify(token, "functionup-technetium-very-secret-key");
//     if (!decodedToken)
//       return res.send({ status: false, msg: "token is invalid" });
  
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });}


const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  else{
  let newuserData = req.body;
  
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, newuserData,{new:true});
  res.send({ status: updatedUser, data: updatedUser });}
};

const deleteUser = async function(req, res){
    let token = req.headers["x-auth-token"];
  
    if (!token)
     {res.send({ status: false, msg: "token must be present" });
    }
    else{
    let  userId = req.params.userId;
    let deleteId= await userModel.findOneAndUpdate({_id: userId},{isDeleted:true},{new:true})
    res.send({ msg:deleteId})}
   
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser=deleteUser;
