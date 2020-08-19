const http=require("http")
const url = require("url");
const router=require("./router")
var hostbind="https://hello.ora.moe"
//exports.route = route;
const route=require("./route")
http.createServer(
    (req,res)=>{
        var fullurl=new URL(hostbind+req.url)
        router(`${hostbind}${req.url}`,res,route[fullurl.pathname])
    }
).listen(1234)
