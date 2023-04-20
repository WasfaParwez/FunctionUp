// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler


function printDate(){
    let curr=new Date()
    let currD=curr.getDate()
    console.log(currD)
}

function printMonth(){
    let curr=new Date()
    let currM=curr.getMonth()
    console.log(currM+1)
}

function getBatchInfo(){
    console.log("Technetium, W4D3 , Thursday , the topic taught today is about Node.js")
}

module.exports={printDate,printMonth,getBatchInfo}