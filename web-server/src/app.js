const path = require('path');
const express = require('express');
const app = express();// 
console.log(__dirname);
console.log(path.join(__dirname,'../public'));
const publicDirectoryPath = path.join(__dirname,'../public');// generate the path to the publi folder
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));// we provide it to static which in some way configure is our express application 
//configure our server
// app.com // one domain server 
//app.com/help
//app.com/about// single exprees server with mutilple routes 
// the process of starting up a server is an asynchronous process

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'It is 50 degrees.There is no chance of rain',
        location:'Lima',
    });
});

 
//start the server app
app.listen(3000,()=>{
    console.log('Server is up on port 3000') // useful piece of information 
});