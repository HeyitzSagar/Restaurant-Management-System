const express = require("express");
const {
  registerController,
  LoginController,
} = require("../controllers/AuthController");

const router = express.Router();

//routes

//Registration route

router.post("/register", registerController);

router.post("/login", LoginController);

module.exports = router;
