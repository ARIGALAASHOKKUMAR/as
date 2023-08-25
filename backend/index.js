const express=require("express")
const server=express()
const cors=require("cors")
const bodyparser=require("body-parser")
server.use(cors())
server.use(bodyparser.json())

const mongoose = require('mongoose');

const uri = 'mongodb+srv://arigelaashok123:KdRXppWx9JpOJyQI@cluster0.e9kr718.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
  });


server.listen(8080,()=>{
    console.log("server started")
})

// KdRXppWx9JpOJyQI