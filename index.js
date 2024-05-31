require('dotenv').config()
const express=require('express')
const app=express()
const port=8000
app.get('/',(req,res)=>
{
    res.send("Hello world")
})
app.get('/login',(req,res)=>
{
    res.send("<h1>Please login at sugatalaha.com</h1>")
})
app.listen(process.env.PORT,()=>
{
    console.log(`Server listening on port ${port}`)
})