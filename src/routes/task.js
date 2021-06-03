const app = require('express');

const Route = app.Router();

Route.get('/task_list',(req,res)=>{
  res.send('working fine list')
})

module.exports = Route;
