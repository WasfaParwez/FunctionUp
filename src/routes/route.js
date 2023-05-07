const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const ModelController=require("../controllers/mainController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.post("/createBook", commonMW.abc, BookController.createBook  )
// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)



router.post("/Createuserdetails", commonMW.mid1, ModelController.User)
router.post("/Createproductdetails", commonMW.mid1, ModelController.product)
router.post("/Createorderdetails", commonMW.mid1, ModelController.order)



module.exports = router;