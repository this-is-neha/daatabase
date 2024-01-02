 const express= require(express)
  const router=express.Router
router.get('/list/:id',(req,res)=>{
    let id=req.params.id;
res.json({
    result :"user detail of id"+id,
    message:"user detail of id"+id,
    meta:null


    })
})

router.delete('/list/:id',(req,res)=>{
    let id=req.params.id;
    res.json({
        result :"user deleted",
        message:"User Deleted for id "+id,
        meta:null
        })
    })



router.post('/listb',(req,res)=>{
    let data={
        id:"b",
        title:"About us page",
        detail:"User created successfully",
        image:"",
        author:"Neha Shah"
    }

res.json({
    result :"user created",
    message:"User created successfully",
    meta:null


    })
})
router.put('/list1',(req,res)=>{
    let data={
        id:"",
        title:"About us page",
        detail:"This is sbout list of users",
        image:"",
        author:"Neha Shah"
    }

res.json({
    result :"user list",
    message:"List of ALL five users",
    meta:null


    })
})



router.post('/about-us',(req,res)=>{
    let data={
        id:"123",
        title:"About us page",
        detail:"This is sbout us content ",
        image:"",
        author:"Neha Shah"
    }

res.json({
    result :data,
    message:"About uus fetched",
    meta:null


})
})



router.get('/about-us',(req,res)=>{
    let data={
        id:"123",
        title:"About us page",
        detail:"This is sbout us content ",
        image:"",
        author:"Neha Shah"
    }

res.json({
    result :data,
    message:"About uus fetched",
    meta:null


})
})



router.use ('/',(req,res)=>{

    console.log(req.url)


res.json({
    result:"Hello world",
    message:"Notification" ,
    meta:null
})

})