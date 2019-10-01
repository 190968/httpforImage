var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();
var path = require("path");
var cors = require("cors");
app.use(cors());



app.get('/', (req,res) => {
     
    res.sendFile(path.join(__dirname,'index.html'));
});


app.get('/one',(req,res)=>{
    console.log("Hello Fill");
    res.send('hello Fill');
});
app.get('/*',(req,res) => {
     console.dir(req.path);
     res.sendFile(path.join(__dirname,req.path))
});

// const server = http.createServer(function(req,res){
//     fs.readFile('./index.html',function(err,data){
//         if ( err ) throw err;
        
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     })
    
// });
const port = process.env.PORT || 3003;
app.listen(port, (err)=>{
    if ( err ) { return  console.log("Error");
    } else {
        console.log("http server runing on 3003 port");
    }
});