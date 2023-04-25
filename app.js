const express=require('express')
const app=express();
const secondPage=require('./service.js')
app.get('/',(request,response)=>{
    response.send("Home Page");

})

app.use('/service',secondPage)
app.listen(4000)