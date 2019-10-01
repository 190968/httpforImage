var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
var path = require("path");
var cors = require("cors");
app.use(cors());
const axios = require('axios');


app.get('/', (req,res) => {
     
    res.sendFile(path.join(__dirname,'index.html'));
});


app.get('/one',(req,res)=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => {   
    res.send(response.data);
})
.catch(error => {
  console.log(error);
});
    
});
app.get('/*',(req,res) => {    
     res.sendFile(path.join(__dirname,req.path))
});


const port = process.env.PORT || 3003;
app.listen(port, (err)=>{
    if ( err ) { return  console.log("Error");
    } else {
        console.log("http server runing on 3003 port");
    }
});