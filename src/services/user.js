const User = require('../model/user');
const bcrypt = require('bcryptjs');

const createUserService = async (body) => {
  try {
    //Password hashing begins
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    //password hashing ends
    body.password = hashedPassword;
    const user = await User.create(body);
    console.log(user);
    console.log('In service created', user && user.get())
    return user.get();
  }
  catch(e) {
    console.error(e)
  }
}

const loginUserService = async ({email, password}) => {
  try {
    const user = await User.findOne({attributes:['email', 'password', 'id', 'source'], where: { email: email}});
    if(!user) {
      return false;
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    return passwordMatched ? user.get() : false
  } catch(e) {
    console.log(e)
    throw new Error('BROKEN');
  }
}

module.exports = {
  createUserService,
  loginUserService
}