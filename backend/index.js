const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
const port = 3000;

mongoose.connect('mongodb+srv://samiulislamsawon09:rd9zmY125udHGa5H@cluster0.9vnje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.on('error', (err)=>{
  console.log(err);
})
db.once('open', ()=>{
  console.log("connected to db");
})

app.post('/', (req, res)=>{
  res.json({message: "Welcome to the application."});
})

app.listen(port, ()=>{
  console.log(`The server is running on port ${port}`);
})


