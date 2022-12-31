const http=require('http');
const express=require('express');
const Parser=require('body-parser');
const app=express();
app.use(Parser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">ADD</button></form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    // console.log('this is second middleware');
    res.send('<h1>This is express</h1>');
})

app.listen(3000)