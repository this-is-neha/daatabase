const express= require('express')
const router=express()
router.use((req,res,next)=>{
    next ({code:404,
    message:"Route not found"})
})

router.use((req,res,next)=>{
    console.log(error)
    console.log("Garbage",error)
    const code=err.code?? 500;
    const message=err.messge??"Server Error"
    const result=err.result??null

    res.status(code).json({
        result:reuslt,
        message:message,
        meta:null
    })
})
module.exports=router