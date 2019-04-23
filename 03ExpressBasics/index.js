const express = require('express');
const app = express();

// Default Page Configuration

app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>");
});

// About Us Page Configuration 

// app.get('/about',(req,res) => {
//     res.send("<h1>I am about page</h1>");
// });

app.get('/about',(req,res) => {
    // res.status(200).json({user: 'Shubham' , balance: '12345' , id: '9876'});
    res.status(500).json({error: "Something went Wrong."});
});

// Contact Us Page Configuration

app.get('/contact',(req,res) => {
    res.send("<h1>I am Contact Page</h1>");
});

// Services Page Configuration 

app.get('/services',(req,res) => {
    res.send("<ul><li><h1>Web Development</h1></li><li><h2>Logo Design</h2></li><li><h3>Video Creation</h3></li></ul>");
});

// Post request Configuration 

app.post('/login',(req,res) => {
    res.send("Login Success");
});

// Delete request Configuration 

app.delete('/delete',(req,res) => {
    res.send("Delete Success");
});

// id and parameters

app.get('/user/:id',(req,res) => {
    res.send(req.params);
});

// id and status parameters 

app.get('/user/:id/status/:status_id',(req,res) => {
    res.send(req.params);
});

app.get('/flight/:from-:to',(req,res) => {
    res.send(req.params);
});

// Show that in which port your app is working 

app.listen(3000, () => console.log('Server is running at port 3000...'));