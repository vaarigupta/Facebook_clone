const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000,()=>{
  console.log("Server running at Port 3000");
})
