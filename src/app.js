const express = require("express");
const http = require("http");

const app = express();

app.get('/',(req,res)=>{
    res.send("hello everyone")
    
})
const port = process.env.PORT || 3000
const server = http.createServer(app)
server.listen(port ,()=>{
    console.log(`server established at port ${port}`);
})