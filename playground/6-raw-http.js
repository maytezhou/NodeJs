const https = require('https');
const url = `https://api.darksky.net/forecast/dd1c5e16d40ab7582da65709db7158f1/40,-75`; 
// to fire off the request 
const request = https.request(url, (response)=>{
    let data = '';
response.on('data',(chunk)=>{
    data = data + chunk.toString()

}) 
response.on('end', ()=>{
    console.log(data);
    const body = JSON.parse(data);
    console.log(body);
   
})


}) ;

request.on('error',()=>{
    console.log('An error', error)
})
request.end();