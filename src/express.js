const express = require("express");
const app     = express();
const path    = require("path");

app.use('/', express.static('src'));
//app.use(express.static(__dirname + 'src'));

//app.use(express.static('build'));
//app.use(express.static('src'));
//app.use(express.static(__dirname + './../build'));
//app.use(express.static(__dirname + '../src'));

app.get('/src', function(req,res){
  res.sendFile(path.resolve(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


//app.use(express.static(__dirname + '/build'));
/*
app.get('/dashboard',function(req,res){
  res.sendFile((path.join(__dirname + '/dashboard.html'));
});

app.get('/index1',function(req,res){
  res.sendFile((path.join(__dirname+'/index.html'));
});
app.get('/',function(req,res){
  res.redirect('/login');
});
app.get('/login',function(req,res){
  res.redirect((path.join(__dirname + '/login'));
});
*/
app.listen(3000, () => console.log('Example app listening on port 3000!'))