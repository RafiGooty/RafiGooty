const express =require("express");
const app=express();
const importData=require("./data.json")
let port=process.env.PORT||3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
     );
      next();
   });
  
   
app.get("/",(req,res,next)=>{
res.send("hello world")
});

app.get("/bluprint-api",(req,res,next)=>{
    res.send(importData)
    });

app.listen(port,()=>{
    console.log("example port is listening on http://localhost:+${port}")
})