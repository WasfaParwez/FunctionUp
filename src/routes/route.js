const express = require('express');
const { route }= require('express/lib/application');
const router = express.Router();

const welc= require("../logger/logger.js")
const {printDate,printMonth,getBatchInfo}= require('../util/helper.js')
const abc= require('../validator/formatter.js')
const low = require('lodash')


router.get('/test-me',function(req,res){
    res.send('hey this is wasfa parwez')

welc()
printDate()
printMonth()
getBatchInfo()
abc()
const months = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ];
let monthsss=low.chunk(months,3)
console.log(monthsss)
const odd=[1,3,5,7,9,11,13,15,17,19]
let odds=low.tail(odd,9)
console.log(odds)
const array1 = [2, 5, 7, 9, 10, 12, 7, 3, 2];
const array2 = [1, 2, 3, 4, 5, 6, 6, 7, 8];
const array3 = [10, 11, 13, 14, 15, 16, 11, 10, 12];
const array4 = [5, 7, 8, 9, 10, 10, 12, 7, 4];
const array5 = [1, 2, 3, 5, 6, 7, 7, 8, 9, 9];
let uni=low.union(array1, array2, array3,array4,array5);
console.log(uni);
let pairs= [['horror','The Shining'],['drama','Titanic"'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
let pairing=low.fromPairs(pairs);

console.log(pairing);


})







module.exports = router;