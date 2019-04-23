const express = require("express");
const bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login" , express.static(__dirname + "/public"));

app.get('/',(req,res) => {
    res.send("<h1>Hello User</h1>");
});

// app.get('/login', (req,res) => {
//     res.send("Hello User");
// })

app.post('/signin', (req , res) => {
    console.log(req.body.email);
    //do some  database process
    res.redirect("/");
});

app.listen(3000, () => console.log('The server is running at post 3000....'));
