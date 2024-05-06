const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "user name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  address: {
    type: Array,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  usertype: {
    type: String,
    required: [true, "user type is required"],
    default: "client",
    enum: ["client", "admin", "vendor", "driver"],
  },
  profile: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dmy%2Bprofile%2Bicon&psig=AOvVaw0R3xdtpu0BBGX-c_2jX-yC&ust=1715096901230000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjMgPyv-YUDFQAAAAAdAAAAABAE",
  },
}, {timestamps: true});


// export
module.exports = mongoose.model('Users', UserSchema);