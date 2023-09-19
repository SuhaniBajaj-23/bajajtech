const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
app.use(express.json());
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

function isN(num) {
    return !isNaN(num - parseFloat(num));
}
function isC(char) {
    return char.toLowerCase() !== char.toUpperCase();
  }
app.use(bodyParser.json())
app.get('/bfhl1', (req, res) => {
res.status(200).send({
    operation_code:1
   })
});

app.post('/bfhl', (req, res) => {
let data=req.body.data;
if(data.length==0){
    res.status(200).send({
        status:false,
        error:"Input empty"
    })
}
let arrletter=[]
let arrnumber=[]
let obj={

user_id: "suhani_bajaj_23102002", 
email : "suhani.bajaj2020@vitstudent.ac.in",
roll_number:"20BCE0851",

}
let alp=''
for(var i=0;i<data.length;i++){
if(isC(data[i]) && data[i].length==1){
    arrletter.push(data[i])
    if(data[i]>alp){
        alp=data[i]
    }
}

if(isN(data[i])){
    arrnumber.push(data[i])
}
}
let object={
    status:true,
    user_id: "suhani_bajaj_23102202", 
email : "suhani.bajaj2020@vitstudent.ac.in",
roll_number:"20BCE0851",
numbers: arrnumber,
alphabets: arrletter,
highest_alphabet:alp
}
res.status(200).send(object);
});

app.listen(port, () => {
    console.log('server running on 3000');
});
