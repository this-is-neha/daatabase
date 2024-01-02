const nodemailer = require("nodemailer")

class Emailservice{
    transporter;
    constructor(){

    
    this.transporter =createTransport({
        host:"sandbox.smtp.mailtrap.io",
        port:587,
        
        auth:{
            users:"f92c23e69949d6",
            pass:"cf00f8344389b5"
        }
})
    }


sendEmail=async(to,sub,message)=>{
    try{
        await transporter.sendMail({
        to:payload.email,
        from:"sandeshbhattarai1.@gmail.com",
        subject:"Broadway",
        html:message,
        text:"Activate your account"
    
    })
} catch(exception){
console.log("SENDEMAIL:",exception)
throw exception;
}
    }
}
 module.exports = Emailservice;
