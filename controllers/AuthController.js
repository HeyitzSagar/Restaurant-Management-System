const UserModel = require("../Models/UserModel");

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
    // now checked if existingUser not true then fruther i will save my user to mongo db
    const user = await UserModel.create({username, email, password, phone, address });
    res.status(201).send({
        success: true, 
        message: `${username} registered successfully !`,
    })


  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      success: false,
      message: "Error in Register API",
      error,
    });
  }
};

// exporting the controller here
module.exports = { registerController };
