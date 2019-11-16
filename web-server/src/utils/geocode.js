const request = require('request');

const geoCode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF5dGV6aG91IiwiYSI6ImNrMThrZHcwdzBpNWMzb28xZG9pYWF2bDgifQ.W30J6NmXM5P5Ko6DCVC-2Q&limit=1';
 request({url , json:true},(error,{body})=>{
if(error){ // if there is no internet connection // low level errors
callback('Unable to connect to location Services',undefined);
}else if (body.features.length === 0){ // if things go wrong with the input
callback('Unable to find location. Try another search',undefined);
}else{ // if everything goes well
    callback(undefined,{
        latitude:body.features[0].center[1],// latitude comes second
         longitude:body.features[0].center[0],// longitude comes first 
         location:body.features[0].place_name,
    })

}
 }
 )
};

module.exports = geoCode;