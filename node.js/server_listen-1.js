var http=require('http');
const { join } = require('path');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<hrml>");
    res.write("   <head>");
    res.write("      <title>응답 페이지</title>");
    res.write("   </head>");
    res.write("<h1>노드제이에스로부터의 응답 페이지: silverlistem-1.js </h>");
    res.write("   </body>");
    res.write("</html>")
    res.end();
}).listen(8080);