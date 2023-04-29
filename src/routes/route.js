const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createbooks", UserController.CreateBook)

router.get("/booknames", UserController.Booklist)

router.post("/bookyear", UserController.getBooksInYear)

router.post("/particular", UserController.getParticularBooks3)

router.get("/pricetag", UserController.getXINRBooks)

router.get("/priceandstock", UserController.getRandomBooks)



module.exports = router;