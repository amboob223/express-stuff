// we makethe varibles and then we do get api thing and then we set uuip listener

const express = require("express")
const app = express()

//
app.get("/api",(req,res)=>{
    res.json({"users":["Abdul","monk","aziz"]})//the {} is backend
})//get in the app.get comes from express in that gety it takes a route for the api api anf the fucntion and the function takes a req and res parameter

app.listen(5000,()=>{console.log("we got it")})