const express = require("express");
const TestController = require("../controllers/testController");

//router object
const router = express.Router();

//routes GET | POST |UPDATE | DELETE
router.get("/test", TestController.testUserController);
router.post("/createuser", TestController.CreateUser);

//export
module.exports = router;
