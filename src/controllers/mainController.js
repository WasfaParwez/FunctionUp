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


const order= async function(req,res){
    try {    const data2= req.body
        const order= await orderModel.create(data2)
        res.send({msg:order})
        
    } catch (err) {
        res.send({msg:err.message})
        
    }
}


module.exports.User=User
module.exports.product=product
module.exports.order=order


