const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const {default:mongoose}= require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);


mongoose.connect("mongodb+srv://parwezwasfa:FrEKcgz9j1UIuir3@cluster0.r5dosiq.mongodb.net/test",
{useNewUrlParser: true})
.then(()=> console.log("MongoDb is connected"))
.catch(err=> console.log(err))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
  })