const express=require("express");
const fs=require("fs");
const site=new express();
site.listen(3000,()=>{
    console.log("Site online");
});
site.use(express.static("./static"));
site.use("/favicon.ico",express.static("./static/ferry.png"));
site.get("/*",(req,res)=>{
    res.send(fs.readFileSync(`./static/${req.originalUrl}.html`,"utf-8"));
});