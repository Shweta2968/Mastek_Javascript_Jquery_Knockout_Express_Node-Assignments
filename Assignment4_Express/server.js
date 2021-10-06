
const http=require('http');

const fs=require('fs');

const port=3000;



http.createServer(function(req,res){

    console.log("What server is doing once request comes!")

}).listen(port,function(){

    console.log("Server started working ");

    console.log(`http://localhost:${port} `);

})