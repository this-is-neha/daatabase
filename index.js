const http=require ('http')
const app=require("./src/config/express.config")
const httpServer=http.createServer(app)

httpServer.listen(3005,'127.0.0.1',(error)=>{
    if (!error){
        console.log("Server is running on port:3005")
        console.log("Press CTRLC+C to disconnent to the  server")
    }
})

// Rest APi 
// there wil be no any state mainted by server 
// login API===>userlogin
//##mothods ==>get ,post
