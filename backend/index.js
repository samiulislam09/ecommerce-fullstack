const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors({origin: '*'}));
const port = 3000;

mongoose.connect(process.env.MONGO_DB_URL);
const db = mongoose.connection;
db.on('error', (err)=>{
  console.log(err);
})
db.once('open', ()=>{
  console.log("connected to db");
})

// Routes
app.use('/api/categories', require('./routes/category'));
app.use('/api/subCategories', require('./routes/SubCategory'));
app.use('/api/brands', require('./routes/brand'));
app.use('/api/coupn', require('./routes/coupon'));
app.use('/api/products', require('./routes/product'));
app.use('/api/users', require('./routes/user'));
app.use('/api/orders', require('./routes/order'));
app.use('/api/vairants', require('./routes/variant'));


app.get('/', (req, res)=>{
  res.status(200).json({success: true, message: "the api is woring successfully", data: []});
})

app.use((error, req, res, next)=>{
  res.status(500).json({success: false, message: error.message, data:[]});
})

app.listen(port, ()=>{
  console.log(`The server is running on port ${port}`);
})


