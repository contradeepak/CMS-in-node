const express = require ('express');
const bodyParser = require('body-parser');

var app = express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/Customer.html");
})

app.post('/',(req,res)=>{
    console.log(req.body);
    res.end('We got POST request');
}
)
app.listen(7080,'127.0.0.1',()=>{
    console.log('Server started at http://127.0.0.1:7080 ');
})