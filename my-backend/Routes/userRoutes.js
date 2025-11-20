const express = require("express");
const { testApi } = require("../Controllers/authController");
const { userRegistration } = require("../Controllers/userController");
const router = express.Router();



// Register route
router.post("/v1/register", userRegistration);

router.get("/test",testApi)


module.exports = router;
