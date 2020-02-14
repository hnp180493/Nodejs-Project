const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWTSecret } = require('../configs/main');


class Helper{
  async hashPassword(password){
    let saltRounds = 10;
    let passwordHash = await bcrypt.hash(password, saltRounds);
    return passwordHash;
  }

  async compareHash(password, passwordHash){
    const isMatch = await bcrypt.compare(password, passwordHash);
    return isMatch;
  }

  generateJWTToken(payload){
    let token = jwt.sign(payload, JWTSecret, {
      expiresIn: 3600,
    });
    return token;
  }

}

module.exports = new Helper();