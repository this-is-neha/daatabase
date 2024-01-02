const Joi=require("joi")
const registerSchema=Joi.object({

    name:Joi.string().min(2).max(30).required,
    email:Joi.string().email().required,
    phone:Joi.string().pattern(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
    role:Joi.string().pattern(/^(customer|seller|admin)$/)
})

const activationToken=Joi.object({
    token:Joi.string().length(100).required()
})

const epasswordschema=Joi.object({
 password:Joi.string().min(8).max(25).required(),
 confirmpassword:Joi.ref('passsword')
})
const loginschema=Joi.object({
    email:Joi.string().length(30).required(),
})

const setpasswordschema=Joi.object({
    password: Joi.string().length(30).required(),
})

const passwordschema=Joi.object({
    password:Joi.string().min(8).max(25).required(),
    confirmpassword:Joi.ref('passsword')
   })



   module.exports={
   registerSchema,
    activationToken,
    passwordschema,
    epasswordschema,
    loginschema,
   setpasswordschema,
   }

