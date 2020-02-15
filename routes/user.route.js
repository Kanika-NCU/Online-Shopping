const express = require('express')
const router = express.Router()
const user_controller = require("../Controllers/user.controller")

router.post("/signup" , user_controller.signup)

router.post("/signin" , user_controller.signin)

router.get("/", user_controller.retrieveuser)

module.exports = router