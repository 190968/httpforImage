const express = require('express');
const fs = require('fs');
const app = express();
const path = require("path");
const cors = require("cors");
app.use(cors());
const Mongoclient = require("mongodb").MongoClient;
const bodyParser = require('body-parser');
const csv = require('csvtojson');

const uri = "mongodb+srv://alex:alex@cluster0alex-mvffj.gcp.mongodb.net/my?retryWrites=true";
app.use(bodyParser.json({ inflate: true, limit: '2000kb', type: 'txt/csv'}));
app.post('/add_to_base',(req,res)=>{
    Mongoclient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },function(err, db){
        if ( err ) throw err;
        var dbo = db.db("my");
        csv().fromFile(path.join(__dirname,'base','base.csv'))
        .then((jsonObj)=>{
            console.log(jsonObj);
            if ( err ) throw err;
            dbo.collection('shoes1').insertMany( jsonObj , (err, res)=>{
                if ( err ) throw err;
                console.log(`inserted: ${res.insertedCount}`);
            });
        });
    });

});

app.get('//', (req,res) => {   
    res.sendFile(path.join(__dirname,'index.html'));
});
//delete file

app.get('/delete', (req,res) => {
    fs.unlink(path.join(__dirname, 'members',`${req.query.member}`,`${req.query.name}`,`${req.query.file}`),(err)=>{
      if ( err ) throw error;
      console.log(`File ${req.query.file} deleted!`);
      res.send('deleted');
    });    
});

//Create directory 
app.get('/createdir',(req,res) => {   
    fs.mkdir(path.join(__dirname, 'members',`${req.query.member}`,`${req.query.name}`),(err)=>{
        if ( err ) throw err;
        console.log(`Catalog  ${req.query.name}  created`);
        res.send("created");
    });
}); 

//Rename Folder
app.get('/rename_folder', (req,res) => {     
    fs.rename(path.join(__dirname, 'members',`${req.query.member}`,`${req.query.name}`),
    path.join(__dirname, 'members',`${req.query.member}`,`${req.query.new_name}`),(err)=>{        
        console.log("Rename is done");
        res.send(`${req.query.new_name}`);
    });
});
//upload files to server
app.use(bodyParser.json({ inflate: true, limit: '2000kb', type: 'image/jpeg'}));
app.post("/upload",  (req, res) =>  {
    console.log('upload');
   const buf = Buffer.from(req.body.file,'base64');   
    fs.writeFile(path.join(__dirname, 'members',`${req.query.member}`,`${req.query.folder}`,`${req.query.file_name}`),buf,(err)=>{
        if ( err ) throw err;      
    }); 
    res.send(buf);
});
app.use('/', function(req,res,next){
    console.log(req.hostname,req.ip);
    next();
});
//delete dir
app.get('/deletedir',(req,res) => {
    fs.unlink(path.join(__dirname, 'members',`${req.query.member}`,`${req.query.name}`),(err)=>{
    if ( err ) { 
        res.send("no deleted");
    } else {
        console.log(`Catalog  ${req.query.name}  for member ${req.query.member} deleted`);
        res.send("deleted");
    }
    });
});

app.get('/created',(req,res) =>{
    fs.mkdir(path.join(__dirname,'members',`${req.query.name}`),(err)=>{
        if ( err ) { 
            console.log("Name invalid");
            res.send('zero');
        } else {
            console.log("Account created");
            res.send('one');
        }
    });    
});

app.get('/stat',(req, res)=>{
    fs.readdir(path.join(__dirname,'members',`${req.query.member}`,`${req.query.folder}`),(err,files)=>{
        if ( err ) throw err;
        console.log(`${req.query.folder} : ${files.length}`);   
        res.send(`${files.length}`);  
    });
});

app.get('/list',(req,res)=>{   
     fs.readdir(path.join(__dirname, 'members',`${req.query.member}`,`${req.query.name}`),(err,files)=>{
        console.log(files);
        res.send(files);
    });    
});

app.get('/member', (req,res) => {    
    const files = fs.readdirSync(path.join(__dirname, 'members',req.query.name));     
    res.send(files);
});

app.get('/main', (req,res) => {     
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get(/inside/, (req,res) => {     
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get(/jpg||jpeg||png/,(req,res) => {
    console.log(req.path);
    res.sendFile(path.join(__dirname,req.path));
});

app.get('/./',(req,res) => {  
    console.log(req.path) ; 
     res.sendFile(path.join(__dirname,req.path));
});

const port = process.env.PORT || 3004;
app.listen(port, (err)=>{
    if ( err ) { return  console.log("Error");
    } else {
        console.log("http server runing on 3004 port");
    }
});
