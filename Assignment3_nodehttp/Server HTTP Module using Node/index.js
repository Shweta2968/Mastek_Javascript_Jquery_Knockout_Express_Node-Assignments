var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
   
    if(req.method === "GET"){
     
            res.end(`We received get type request`);  
        
    }
    else if(req.method === "POST"){
        res.end(`We received post type request`);
    }
    else if(req.method === "PUT"){
        res.end(`We received put type request`);
    }
    else if (req.method === "DELETE"){
        res.end(`We received delete type request`);
    }

    
        
        }).listen(3000);
