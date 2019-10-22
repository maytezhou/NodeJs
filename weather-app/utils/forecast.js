const request = require('request');
const forecast= (latitude,longitude,callback)=>{
    const url = `https://api.darksky.net/forecast/dd1c5e16d40ab7582da65709db7158f1/${latitude},${longitude}`;  
    request({url, json:true},(error,{body})=>{
        if(error){// if there is no internet connection // low level errors
            callback('Unable to connect to weather service',undefined);
        }else if (body.error){// if things go wrong with the input// if the coordinates are bad
            callback('Unable to find location',undefined);
          
        }else{// if everything goes well
            callback(undefined,
                `${body.daily.data[0].summary} It is currently ${body.currently.temperature}. There is a ${body.currently.precipProbability}% chance of rain `
            )
        
        }
    })


}

module.exports = forecast;