const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname+'/index.html'))
}) 

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`)
})