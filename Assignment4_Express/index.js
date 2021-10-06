
const express=require('express');
const server=express();
const port=3000;//middleware json() urlencoding
server.use(express.json());
server.use(express.urlencoded({extended:true}));
// Http Methods
 server.get('/get',(req,res)=>{ 
       res.send("Get Method called ");
});
server.post('/post',(req,res)=>{  
      res.send("Post Method called ");
});
server.put('/put',(req,res)=>{
        res.send("Put Method called ");
});
server.delete('/delete',(req,res)=>{
        res.send("Delete Method called ");
})
server.listen(port,()=>{ 
       console.log(`http://localhost:${port} server listening`)
})
