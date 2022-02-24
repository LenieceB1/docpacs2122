const express = require('express');
const app = express()
const port = 8080
const ip = '127.0.0.1'
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))




app.get('/', function(req,res){
  res.render('index.ejs')
})

app.get('/neworder', function(req,res){
  res.render('neworder.ejs')
})

app.post('/neworder', function(req,res){
  const name = req.body.cName
  const address = req.body.cAddress
})




app.get('/additem', function(req,res){
  res.render('additem.ejs')
})

app.get('/view', function(req,res){
  res.locals.query = req.query;
  res.render('view.ejs')
  if(res.locals.query){
    console.log(req.query);
  }else{
    console.log('no')
  }
})

app.listen(port, ip, function(){
  console.log("Server Up: ");
})
