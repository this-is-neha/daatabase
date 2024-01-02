// // public /files /users,json-[
// const fs = require("fs");

// const users = [{
//     id : 1,
//     address:"'kathmandu",
//     name:"Neha"
// },
// {
//     id : 2,
//     address:"'kathmanduu",
//     name:"Amrita"
// }
// ]
// let filePath="./public/files"
// let fileName="users.json"
// if(!fs.existsSync(filePath)){
//     fs.mkdirSync(filePath,{
//         recursive:true
//     });
// }
// // const usernew  = {
// //     id:3,
// //     name:"KOhinoor",
// //     email:"nehushah"

// // }

// str=JSON.stringify(data)
// const usernew  = {
//     id:3,
//     name:"KOhinoor",
//     email:"nehushah"

// }
// fs.writeFileSync(filePath+"/"+fileName,str)
// console.log(data)


// const str = JSON.stringify(users)
// const data=fs.readFileSync(filePath+"/"+fileName,{
//     encoding:"utf8"
// });
// data=JSON.parse(data)
// data.push(usernew)
// const newStr=","+JSON.stringify(usernew)
// const size=fs.statSync

// // str=JSON.stringify(data)
// // fs.writeFileSync(filePath+"/"+fileName,str)
// // console.log(data)


// fs.writeFileSync(filePath+"/"+fileName,str) 
// console.log("File written successfully")



// //fs.unlinkSync()
// // fs.rmdirSync()//fooder should be empty
// // fs.readdirSync()



const fs = require("fs");

const users = [
  {
    id: 1,
    address: "kathmandu",
    name: "Neha"
  },
  {
    id: 2,
    address: "kathmanduu",
    name: "Amrita"
  }
];

const filePath = "./public/files";
const fileName = "users.json";
const fullPath = `${filePath}/${fileName}`;

// Create the directory if it doesn't exist
if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, {
    recursive: true
  });
}

// Write the initial data to the file
fs.writeFileSync(fullPath, JSON.stringify(users), {
  encoding: "utf8"
});
console.log("File written successfully");

// Read the existing data from the file
let data = fs.readFileSync(fullPath, {
  encoding: "utf8"
});
data = JSON.parse(data);

// Add a new user to the data
const userNew = {
  id: 3,
  name: "Kohinoor",
  email: "nehushah"
};
data.push(userNew);

// Write the updated data back to the file
fs.writeFileSync(fullPath, JSON.stringify(data), {
  encoding: "utf8"
});
console.log("File updated successfully");