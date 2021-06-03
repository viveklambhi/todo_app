const express = require('express');
require('dotenv').config()
const app = express();
const db = require('./config/dbConfig');
const userRoutes = require('./src/routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.use();
app.use((req,res, next)=>{
  console.log('middleware',req.body.userId);
  req.currentUser = req.body.userId;
  next();
}, userRoutes);

const dbSync = async () => {
  try {
    await db.sync();
    app.listen(process.env.PORT, (req,res)=>{
      console.log('started at', process.env.PORT)
    })
  } catch(e) {
    console.log(e)
  }
}

dbSync();


