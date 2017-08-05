const express = require('express');

const app = express();

var count = 1;
app.get('/',(req,res)=>{
  res.send({hello:count++});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
