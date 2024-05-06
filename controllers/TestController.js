const testUserController = (req, res) => {
  try {
    res.status(200).send("<h1>Test user Data</h1>");
  } catch (error) {
    console.log("error In Test API", error);
  }
};

const CreateUser = (req, res) => {
  try {
    const { username, password } = req.body;
    if (username && password) {
      res.status(200).json({
        msg: `${username} successfully created`,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { testUserController, CreateUser };
