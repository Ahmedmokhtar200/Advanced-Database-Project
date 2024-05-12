require('dotenv').config()
const express = require('express')
const app = express()
const loginRoutes = require('./routes/loginRoute.js')
const adminRoutes = require('./routes/adminRoute.js')
const userRoutes = require('./routes/userRoute.js')
const orderRoutes = require('./routes/order.js')
const port = 3030;
const connectDB = require('./database/database.js')
const cors = require('cors')

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/',loginRoutes)
app.use('/admin', adminRoutes); // Prefix all admin routes with '/admin'
app.use('/user', userRoutes); // Prefix all admin routes with '/admin'
app.use('/order',orderRoutes)

const start = async() => {
  try {
    await connectDB()
    app.listen(port , console.log('server is connceted'))
  } catch (error) {
    console.log(error)
  }
}

start()