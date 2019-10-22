
const geoCode = require( './utils/geocode');
const forecast = require('./utils/forecast');


const address = process.argv[2];
// console.log(address);

if(!address){
    console.log('No location Provided. Please provide at least an address')

}else {
    geoCode(address,(error,data)=>{ // then the callback can then choose what to do with the error
        if(error){
            return console.log(error);
        }
        
        forecast(data.latitude,data.longitude, (error, forecastData) => {
            if(error){
        return console.log(error);
            }
         console.log(data.location);
         console.log(forecastData);
          });
        }) ;
}




