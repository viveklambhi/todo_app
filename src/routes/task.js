const app = require('express');

const taskRoute = app.Router();

taskRoute.get('/task_list',(req,res)=>{
  res.send('workin list')
})

module.exports = taskRoute;
