const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleController = require("../middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleController.middle, userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.put("/userss/:userId", userController.deleteUser)


module.exports = router;