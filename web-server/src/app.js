const forecast = require('./utils/forecast');
const geocode =require('./utils/geocode') ;

const path = require('path');
const express = require('express');
const app = express();// 
const hbs =require('hbs');


console.log('this is dirname ' + __dirname);
console.log(path.join(__dirname,'../public'));



//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public');// generate the path to the publi folder
const viewsPath = path.join(__dirname,'../templates/views');// generate  a brand new path for the directory where the views will live
const partialsPath = path.join(__dirname,'../templates/partials');//telliing hbs where the partials directory lives in
//setup handlebars engine and views location 
app.set('view engine', 'hbs');// setting up hbs template engine
app.set('views', viewsPath);// telling express where to look for your views
hbs.registerPartials(partialsPath);// configure hbs
//Set up static directory to serve
app.use(express.static(publicDirectoryPath));// we provide it to static which in some way configure is our express application 
//configure our server
// app.com // one domain server 
//app.com/help
//app.com/about// single exprees server with mutilple routes 
// the process of starting up a server is an asynchronous process
app.get('', (req, res) => {
    res.render('index', {
        title:'Weather App Title',
        name:'Mayte Souza. Name',
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title:' About me and my familiy Title',
        name:'Mayte Zhou. Name',
    });
})
app.get('/help', (req, res) => {
    res.render('help', {
        title:' Help message Title',
        message:'Hi I am Mayte Zhou, I need help, please. Message',
        name:'Mayte Zhou. Name',
    });
})
app.get('/weather',(req,res)=>{
    if (!req.query.address){
        return res.send({ error:"You must provide an address"}) 
  
      }
      geocode(req.query.address,(error,{latitude,longitude,location})=>{
        if (error){
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=>{
            if (error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address,
            })
        })
      })
  
});

app.get('/products',(req,res )=>{
   if (!req.query.search){
      return res.send({ error:"You must provide a search term"}) 

    }
    console.log(req.query);
res.send({
    products:[],
})
})
app.get('/help/*',(req,res)=>{
    res.render('404', {
        title:'404',
        message:'Hi I am Mayte Zhou, I need help, please. Message',
        errorMessage:'Help article nout found. The page you are looking for does not exist',
        name:'Mayte Zhou. Name',
    });
});
 app.get('*',(req,res)=>{
    res.render('404', {
        title:'404',
        message:'Hi I am Mayte Zhou, I need help, please. Message',
        errorMessage:'Page not found.The page you are looking for does not exist',
        name:'Mayte Zhou. Name',
    });
 })
//start the server app
app.listen(3000,()=>{
    console.log('Server is up on port 3000') // useful piece of information 
});