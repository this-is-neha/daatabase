const multer = require('multer')
const fs = require("fs")
const {randomString} = require('../config/helpers.config')


const mystorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = "./public/uploads"
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, {
                recursive: true
            })
        }
        cb(null, path)
    },
    filename: (req, file, cb) => {
        const ext = (file.originalname.split(".")).pop()
        const fileName =RandomString(30) + "." + ext
        cb(null, fileName)
    }
})
const imageFilter =(req,res,cb)=>{
    const ext=(file.originalname.split(".")).pop()
    if(['jpg','jpeg','png','svg','gif','webp','bmp'].includes(ext.tolowercase())){
    cb (null,cb)
    }
    else{
        cb({
            code:422,
            message:"File format not supported"
        })
    }

}



const uploader = multer({
    storage: mystorage,
    filterFilter:imageFilter,
    limits:{
        filesize:5000000
    }
})
module.exports = uploader;