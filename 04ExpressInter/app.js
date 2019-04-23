const express = require('express');
const app = express();

// middleware Section

// var myConsoleLog = function(req,res,next) {
//     console.log("I am a middleware");
//     next();
// }

var serverTime = function(req,res,next) {
    req.requestTime = new Date();
    next();
}


app.use(serverTime);

app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>" + " and the time is : " + req.requestTime);
    console.log("Hello World from /");
});

app.listen(3000, () => console.log("server is running at 3000 port"));