const Joi = require("joi");
const Emailservice = require("../common/email/emailservices");

class Authcontroller {
    //TODO:functions
    regiser = async (req, res, next) => {
        try {
            const payload = req.body;
            if (req.file) {
                payload.image = req.file.fileName
            }
            if (req.files) {
                const images = req.files.map((img) => img.file.fileName)
                payload.image = images
            }
            payload.activationtoken = randonString(100);
            payload.status = 'notactivated';
            letdbstatus = true;
            if (dbstatus) {
                let link = "http://localhost:5713/activate" + payload.activationToken
                let message = `Dear${payload.name},<br />
                <p>Your account has been successfully registered.Please click the link belowor copy paste the url in browser:</p>
                <a href ="${link}">
                    ${link}
                </a>
                <br/>
                regards<br/>
                System Admin<br/>
                <small>
                    <em>Please enter your credentials</em>
                </small>`

                await (Emailservice()).sendEmail(payload.email, "Activate your account", message);

            }
            res.json({
                result: payload,
                message: "Register Data",
                meta: null
            })

        }
        catch (exception) {
            next({
                code: 422,
                message: exception.message,
                mata: null
            })
        }


        verifyActivationToken = (req, res, next) => {
            // TODO:verify token

            res.json({
                result: payload,
                message: "Activated",
                meta: null
            })
        }




        activationuser = (req, res, next) => {
            try {
                let user = {
                    name: "neha",
                    email: "nehushah12@gmail.com",
                    status: "active",
                    password: "..."
                }
                const success = true;
                if (success) {
                    res.json({
                        result: "First",
                        message: "Account activated",
                        meta: null
                    })
                }
                else {
                    throw { code: 404, message: "Cannot be activated" }
                }
            }


            catch (exception) {
                next(exception)
            }
        }




        loginUser = (req, res, next) => {
            res.json({
                message: "Hello There"
            })
        }





        getLoggedInUser = (req, res, next) => {
            consolke.log("I am fine")
            res.json({
                result: null,
                message: "I am on me route",
                meta: null
            })
        }





        logOutUser = (req, res, next) => {

        }




        sendEmailForForgetPassword = (req, res, next) => {

        }



        verifyForgetPasswordToken = (req, res, next) => {

        }



        updatePassword = (req, res, next) => {

        }




    }
}
const authCtrl = new Authcontroller();
module.exports = authCtrl;