const { 
  createUserService, 
  loginUserService 
} = require('../services/user');
const User = require('../model/user');
const createUserController = async (req, res) => {
  
  try {
    console.log('In controller')
    let {email='', password='', name=undefined} = req.body;
    const userFound = await User.findOne({where: { email: email}});
    console.log("======",userFound)
    if(userFound) {
      return res.send('User already exist');
    }
    const user  = await createUserService({email, password, name});
    console.log(user);
    res.send(user);
  } catch(e) {
    console.error(e);
  }
}

const loginUserController = async (req, res) => {
  try {
    let {email, password} = req.body;
    const user = await loginUserService({email, password});
    
    res.send(user || 'Invalid');
  } catch(e) {
    console.error('controllere eror', e);
    res.sendStatus(500);
  }
}

module.exports = {
  createUserController,
  loginUserController
}