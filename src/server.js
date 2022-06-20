// install and import express
const express=require('express')
const path=require('path')
// const express = () => {};
let app = express();

// Code here
const PORT=8000;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + "../../src/assets/users.html"));
});


app.listen(PORT,()=>{
    console.log(`listening on port: ${PORT}`)
})
// Note: Do not remove this export statement
module.exports = app;
