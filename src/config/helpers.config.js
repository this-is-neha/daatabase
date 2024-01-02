const randomstring=(len=100)=>{
const chars="01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const length=chars.length;
let random= ""
for(let i=0;i<length;i++){
    const posn =Math.ceil((Math.random()*(length-1)))

    random+=chars[posn]
        
}
return random;

}
module.exports={
    randomstring
}