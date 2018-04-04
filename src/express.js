const express = require("express");
const app     = express();
const path    = require("path");

app.use('/', express.static('src'));

app.get('/src', function(req,res){
  res.sendFile(path.resolve(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000, () => console.log('Your app listening on port 3000!'))