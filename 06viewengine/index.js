const express = require('express');
const path = require('path');
let app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/",(req,res) => {
    res.render("index");
});

app.listen(3000, () => console.log("Server is running at port 3000....."));