const app = require('express');
const { 
  createUserController, 
  loginUserController 
} = require('../controller/user');
const Route = app.Router();

Route.post('/register', createUserController);
Route.post('/login', loginUserController);

module.exports = Route;
