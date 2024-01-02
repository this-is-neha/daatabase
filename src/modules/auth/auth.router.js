const router=require('express').Router()
const authCheck=require('../../middlewares/auth.middleware')
const authCtrl=require('./auth.controller')
const {validator,paramvalidator,validatoremail}=require('../../middlewares/validator.middleware').default
const{registerSchema,activationToken,epasswordschema,passwordschema,setpasswordschema,loginschema}=require("./auth.request")
const uploader=require('../../middlewares/uploader.middleware')


// router.post('./login',(req ,res)=>{
// res.json({
//    result:"helllo world"
// });
// })
// Register User
router.post('/register',uploader.single('image'), validator(registerSchema), authCtrl.regiser)
router.get("/verify/:token",paramvalidator(activationToken), authCtrl.verifyActivationToken)
router.post("/activation/:token",paramvalidator(activationToken),validator(passwordschema), authCtrl.activateUser)




// login Process
router.post('/login',validatoremail(loginschema),validator(epasswordschema),authCtrl.loginUser)
router.get("/me",authCheck,authCtrl.getLoggedInUser)
router.post("/logout",authCheck,authCtrl.logoutUser)


// Forget Password
router.post('/forget-password',validatoremail(forgetemailschema),authCtrl.sendEmailForForgetPassword)
router.get('/verify-password-token/:token',paramvalidator(activationToken),authCtrl.verifyForgetPasswordToken)
router.post('/set-password/:token',paramvalidator(activationToken),validator(setpasswordschema),authCtrl.updatePassword)



module.exports=router;