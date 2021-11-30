const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const port=process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI
const app=express()

//MIDDLEWARE
app.use(express.json())
app.use(cors())

//CONTROLLERS
const inventoryController=require('./controllers/inventory.js')

app.use('/inventory',inventoryController)


//ROUTES
app.get('/',(req,res)=>{
    res.redirect('/inventory')
})


//LISTENERS
app.listen(port,()=>{
    console.log('listening on port, '+ port)
})

mongoose.connect(MONGODB_URI,()=>{
    console.log('Connection established with mongod at ', + MONGODB_URI);
})