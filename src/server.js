// install and import express
const express=require('express')
const path=require('path')
// const express = () => {};
let app = express();

// Code here
const PORT=8000;
const User = require('./assets/user.json')

//GET
app.get('/',(req,res)=>{
    console.log('get success')
    res.sendFile(path.join(__dirname+"/assets/users.html"));
});

app.get("/users/:id",(req, res) => {
    console.log('getting by id')
    const user =  User.filter((e)=>e.id==req.params.id)
    return res.status(201).send(user)
});

app.get("/users",(req, res) => {
    return res.status(200).send(User)
});

//POST
app.get("/users",(req, res) => {
    const user =  User.create(req.body)
    return res.status(201).send(user)
});


app.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})
// Note: Do not remove this export statement
module.exports = app;
