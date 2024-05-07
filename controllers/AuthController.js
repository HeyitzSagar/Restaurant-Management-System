const UserModel = require("../Models/UserModel");
const bcrypt = require('bcrypt');

// defining controllers for the registration of the users

const registerController = async (req, res) => {
  try {
    const { username, email, password, phone, address } = req.body;
    //validating the body
    if (!username || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All feilds",
      });
    }
    // check user
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User Already Existed, use other email address !",
        error,
      });
    }
    // hashing password
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // now checked if existingUser not true then fruther i will save my user to mongo db
    const user = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    console.log(`User details : ${user}`)
    res.status(201).send({
      success: true,
      message: `${username} registered successfully !`,
      user
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

// defining the login controllers for the login process

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(501).send({
        success: false,
        message: "Provide all the feild",
      });
    }

    //check user
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(501).send({
        success: false,
        message: `User not found !`,
      });
    }
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// exporting the controller here
module.exports = { registerController, LoginController };
