const express = require('express');
const router = express.Router();



let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 
 
 
 
 router.get("/pro",function(req,res){
    let q= req.query.votingAge
    let k= persons.map((element) =>{
       if (element.age>q){
           element.votingStatus=true
          }
       else{
          element.votingStatus=false
       }
       return element
    })
    res.send({msg:k})  })
 




module.exports = router;