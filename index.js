require('dotenv').config();
const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to the website</h1>")
})
app.get('/about', (req, res)=>{
    res.send("<h1>This is About Page</h1>")
})
app.get('/contact', (req, res)=>{
    res.send("<h1>This is Contact Page</h1>")
})
app.get('/profile', (req, res)=>{
    res.send("<h1>Hii this is your Profile!!!</h1>")
})

app.listen(PORT, ()=>{
    console.log(`listening on port : ${PORT}`)
})