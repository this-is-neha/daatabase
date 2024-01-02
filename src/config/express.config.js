const express = require('express')
const app= express()
const router = require('../routes/router')
const errorRoutes=require("./error.config")


app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
// route
app.use('/api/v1',router)

// app.use(errorRoutes)
// 
app.use((req,res,next)=>{
    next({
        code:404,
        message:"Routes are not Found"
    })
})


// Error Handler
app.use((error,req,res,next)=>{
console.log("garbage",error)
const code=error.code??500;
const message=error.message??"Server Error";
const result=error.result ??null;


res.status(code).json({
    result:result,
    message:message,
    meta:null
})
})



 module.exports =app;


