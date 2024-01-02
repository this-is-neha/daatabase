const validator=(schema)=>{
    return async (req,_res,next)=>{
        try{
let payload=req.body;
     await schema.validateASync(payload) 
        }
        catch(exception){
         next({
            code:422,
            message:exception.message,
            meta:null

        })
    }
}

}

 const paramvalidator=(schema)=>{

    return async(req,_res,next)=>{
        try{
        let payload=req.params 
        await schema.validateASync(payload)
        }
    catch (exception){
        next({
            code:422,
            message:exception.message,
            meta:null
 
        })
    }
 }

}

 const validatoremail=(schema)=>{
    return async (req,_res,next)=>{
        try{
let payload=req.body;
     await schema.validateASync(payload) 
        }
        catch(exception){
         next({
            code:422,
            message:exception.message,
            meta:null

        })
    }
}

}



module.exports={
    validator,
    paramvalidator,
    validatoremail,
}