const userModel= require('../models/userModel')
const productModel= require('../models/productModel')
const orderModel= require('../models/orderModel')

const User=async function(req,res){
      const data= req.body
      const users= await userModel.create(data)
      res.send({msg:users})

}

const product= async function(req,res){
    const data1= req.body
    const product= await productModel.create(data1)
    res.send({msg:product})
}

const order = async function(req, res) {
    try {
      const data2 = req.body;
      const freeapp = req.headers["isfreeappuser"];
  
      if (freeapp === "true") {
        data2.amount = 0;
        data2.isFreeAppUser = true;
      } else {
        data2.isFreeAppUser = false;
  
        const balance = await userModel.findOneAndUpdate(
          {
            $and: [
              { _id: data2.userId },
              { balance: { $gte: data2.amount } }
            ]
          },
          {
            $inc: { balance: -data2.amount },
            isFreeAppUser: false
          },
          { new: true }
        );
        if (!balance) {
          return res.send({ msg: "balance low" }); 
        }
      }
      const order = await orderModel.create(data2);
      res.send({ msg: order }); 
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Internal server error" }); 
  }};
  

module.exports.User=User
module.exports.product=product
module.exports.order=order


