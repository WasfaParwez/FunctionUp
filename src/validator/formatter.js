// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

function abc(){
    let name="functionUp "
    name=name.trim()
    let lower=name.toLowerCase()
    let upper=name.toUpperCase()
    console.log(name,lower,upper)
}

module.exports=abc;