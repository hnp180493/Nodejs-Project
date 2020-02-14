const UserModel = require('../models/userModel');
const helper = require('../helpers');

module.exports.register = async function(req, res) {
  let { username, password } = req.body;
  if (!username) {
    return res.json({
      message: 'Please enter your username',
    });
  }
  if (!password) {
    return res.json({
      message: 'Please enter your password',
    });
  }
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      return res.json({
        message: 'User already exists',
      });
    }

    const passwordHash = await helper.hashPassword(password);
    const userModel = new UserModel({
      username,
      password: passwordHash,
    });
    let userCreated = await userModel.save();

    let payload = {
      id: userCreated.id,
      username: userCreated.username,
    };
    const jwtToken = helper.generateJWTToken(payload);

    return res.json({
      token: jwtToken,
      message: '',
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports.login = async function(req, res) {
  const { user } = req;
  let payload = {
    id: user.id,
    username: user.username,
  };
  const jwtToken = helper.generateJWTToken(payload);
  res.cookie('jwt', jwt, { httpOnly: true, secure: true });
  return res.json({
    token: jwtToken,
    message: '',
  });
};
