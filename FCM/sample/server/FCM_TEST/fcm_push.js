const request = require('request');
request('http://192.168.0.97:3000/push', function (error, response, body) {
     if (!error && response.statusCode == 200) {
       console.log(body) // Show the HTML for the Google homepage. 
     }
});