const express = require("express");
const { testApi } = require("../Controllers/authController");
const { userRegistration, userLogin } = require("../Controllers/userController");
const router = express.Router();



// Register route
router.post("/v1/register", userRegistration);
router.get("/v1/login",userLogin)

router.post("/test",testApi)


module.exports = router;
