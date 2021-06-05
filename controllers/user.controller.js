const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.signup = async (req, res) => {
  const {name, email, password} = req.body;
  if(!name || !email || !password){
      res.send("field Required")

  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      console.log(userExist);
      return res.status(422).json({ error: "Email alreday Exist" });
    }
    const user = new User({
      name,
      email,
      password,
    });
    /// pre save password hashing in user schema
    const userRegister = await user.save();
    if (userRegister) {
      res.status(201).json({ message: "User resgister successfuly" });
    } else {
      res.status(500).json({ error: "Faild to register" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email: email })
    .then((data) => {
      console.log(data);
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.send("email Or passward Incorrect");
    });
};