const express=require('express');

const app=express();


app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index');
});

app.get('/login',function(req,res){
    res.render('login');
});

app.get('/signup',function(req,res){
    res.render('signup');
});


app.listen(3456);